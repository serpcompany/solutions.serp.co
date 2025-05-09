// This is a TypeScript declaration for the content schema
// The actual schema validation is handled by Nuxt Content

// Import this using the default export style to fix TypeScript errors
import { z } from 'zod';

// Temp fix: Use export default function style to avoid TypeScript errors
// with the current version of @nuxt/content
export default function () {
  return {
    collections: {
      content: {
        type: 'page',
        source: '**/*.md',
        schema: z.object({
          title: z.string(),
          description: z.string().optional(),
          videoId: z.string().optional(),
          socialProofCards: z
            .array(
              z.object({
                id: z.number(),
                title: z.string(),
                value: z.string(),
                description: z.string()
              })
            )
            .optional()
        })
      }
    }
  };
}
