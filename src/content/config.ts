import { defineCollection, reference, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.object({ // Indentation corrected
            src: z.string().optional(),
            alt: z.string().optional(),
        }),
	}),
});

export const collections = { blog };
