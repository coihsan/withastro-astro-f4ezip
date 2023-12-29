import { defineCollection, reference, z } from 'astro:content';
import { remarkReadingTime } from './remark-reading-time.mjs';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.object({ 
            src: z.string().optional().default(''),
            alt: z.string().optional().default(''),
        }).optional(),
		tags: z.string()
	}),
});

export const collections = { blog };
