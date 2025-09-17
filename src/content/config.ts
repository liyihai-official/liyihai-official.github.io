import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    lang: z.enum(['en','zh']).default('en'),
    tags: z.array(z.string()).optional()
  })
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    lang: z.enum(['en','zh']).default('en'),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    repo: z.string().url().optional()
  })
});

export const collections = { blog, projects };
