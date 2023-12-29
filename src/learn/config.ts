import { defineCollection, reference, z } from 'astro:content';

const learn = defineCollection({
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
	}),
});

export const collections = { learn };