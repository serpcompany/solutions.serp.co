<script setup lang="ts">
  /// <reference types="youtube" />
  import { computed, onMounted, ref } from 'vue';
  import type { HTMLAttributes, ImgHTMLAttributes, Ref } from 'vue';
  import { defu } from 'defu';
  import { useHead } from '#imports';
  import { useScriptYouTubePlayer, useScriptTriggerElement } from '#imports';

  // Define and default props, using manual trigger for deterministic loading
  const props = withDefaults(
    defineProps<{
      placeholderAttrs?: ImgHTMLAttributes;
      rootAttrs?: HTMLAttributes;
      aboveTheFold?: boolean;
      videoId: string;
      playerVars?: YT.PlayerVars;
      width?: number;
      height?: number;
    }>(),
    {
      width: 640,
      height: 360,
      placeholderAttrs: () => ({}),
      rootAttrs: () => ({}),
      playerVars: () => {
        return {
          autoplay: 0,
          playsinline: 1
        } as YT.PlayerVars;
      }
    }
  );

  // Define emits with TypeScript types
  const emits = defineEmits<{
    ready: [e: YT.PlayerEvent];
    'state-change': [e: YT.OnStateChangeEvent, target: YT.Player];
    error: [e: YT.OnErrorEvent, target: YT.Player];
  }>();

  // List of YouTube player events we care about
  const events: (keyof YT.Events)[] = ['onReady', 'onStateChange', 'onError'];

  const rootEl = ref<HTMLElement>();
  const youtubeEl = ref<HTMLElement>();
  const ready = ref(false);

  // Create a manual trigger (with optional SSR attrs)
  const trigger = useScriptTriggerElement({ trigger: 'manual', el: rootEl });
  const triggerAttrs = computed(() =>
    trigger instanceof Promise ? trigger.ssrAttrs : {}
  );

  // Setup the script loader with manual trigger
  const { onLoaded, status, load } = useScriptYouTubePlayer({
    scriptOptions: { trigger: 'manual' }
  });

  const player: Ref<YT.Player | undefined> = ref();

  onMounted(() => {
    // Immediately inject the YouTube IFrame API script
    load();

    onLoaded(async (instance) => {
      try {
        if (!youtubeEl.value) {
          console.warn('YouTube element reference is not available');
          return;
        }

        const YouTube =
          instance.YT instanceof Promise ? await instance.YT : instance.YT;

        await new Promise<void>((resolve) => {
          if (typeof YouTube?.Player === 'undefined') {
            if (typeof YouTube?.ready === 'function') {
              YouTube.ready(resolve);
            } else {
              // If YouTube.ready is not available, resolve after a short delay
              setTimeout(resolve, 100);
            }
          } else {
            resolve();
          }
        });

        // Check again after waiting to ensure elements exist
        if (!youtubeEl.value || typeof YT?.Player === 'undefined') {
          console.warn(
            'Failed to initialize YouTube player: missing dependencies'
          );
          return;
        }

        player.value = new YT.Player(youtubeEl.value, {
          videoId: props.videoId,
          playerVars: props.playerVars,
          width: props.width,
          height: props.height,
          events: Object.fromEntries(
            events.map((event) => [
              event,
              (e: unknown) => {
                const name = event
                  .replace(/([A-Z])/g, '-$1')
                  .replace('on-', '')
                  .toLowerCase();
                // @ts-expect-error
                emits(name, e as any);
                if (event === 'onReady') ready.value = true;
              }
            ])
          )
        });
      } catch (err) {
        console.error('Error initializing YouTube player:', err);
      }
    });
  });

  defineExpose({ player });

  // Compute the base attributes for the root element
  const rootAttrs = computed(() =>
    defu(props.rootAttrs, {
      'aria-busy': status.value === 'loading',
      'aria-label':
        status.value === 'awaitingLoad'
          ? 'YouTube Player - Placeholder'
          : status.value === 'loading'
            ? 'YouTube Player - Loading'
            : 'YouTube Player - Loaded',
      role: 'application',
      style: {
        position: 'relative',
        backgroundColor: 'black',
        maxWidth: '100%',
        width: `${props.width}px`,
        aspectRatio: `${props.width}/${props.height}`
      }
    } as HTMLAttributes)
  );

  // **Merge** both attribute sets into one object to bind in template
  const mergedAttrs = computed(() => ({
    ...rootAttrs.value,
    ...triggerAttrs.value
  }));

  // Placeholder image URL
  const placeholder = computed(
    () => `https://i.ytimg.com/vi_webp/${props.videoId}/sddefault.webp`
  );

  // Preconnect/preload for above-the-fold scenarios
  if (import.meta.server) {
    useHead({
      link: [
        {
          rel: props.aboveTheFold ? 'preconnect' : 'dns-prefetch',
          href: 'https://i.ytimg.com'
        },
        props.aboveTheFold
          ? { rel: 'preload', as: 'image', href: placeholder.value }
          : {}
      ]
    });
  }

  const placeholderAttrs = computed(() =>
    defu(props.placeholderAttrs, {
      src: placeholder.value,
      alt: '',
      loading: props.aboveTheFold ? 'eager' : 'lazy',
      style: { width: '100%', objectFit: 'cover', height: '100%' }
    } as ImgHTMLAttributes)
  );
</script>

<template>
  <ClientOnly fallback-tag="div">
    <template #fallback>
      <img v-bind="placeholderAttrs" alt="Video Placeholder" />
    </template>
    <!-- Bind the merged attributes here to avoid duplicate v-bind directives -->
    <div ref="rootEl" v-bind="mergedAttrs">
      <div
        ref="youtubeEl"
        style="width: 100%; height: 100%; position: absolute; top: 0; left: 0"
      ></div>
      <slot v-if="!ready" name="placeholder" :placeholder="placeholder">
        <img v-bind="placeholderAttrs" />
      </slot>
      <slot v-if="status === 'loading'" name="loading">
        <ScriptLoadingIndicator />
      </slot>
      <slot v-else-if="status === 'error'" name="error"></slot>
      <slot></slot>
    </div>
  </ClientOnly>
</template>
