import { defineCollection, defineContentConfig } from '@nuxt/content';
import { z } from 'zod'; // You may need to install this package

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        videoId: z.string().optional(),
        socialProofCards: z.array(
          z.object({
            id: z.number(),
            title: z.string(),
            value: z.string(),
            description: z.string()
          })
        ).optional()
      })
    })
  }
});
