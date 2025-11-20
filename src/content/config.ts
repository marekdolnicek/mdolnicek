import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string().max(220),
    stack: z.array(z.string()).min(1),
    role: z.string(),
    link: z.string().url().optional(),
    order: z.number().default(0)
  })
});

export const collections = { projects };
