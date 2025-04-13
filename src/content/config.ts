import { defineCollection, z } from "astro:content";
import { Schema } from "astro:schema";



const postcollection = defineCollection({
    schema: ({image}) => z.object({
        author: z.string(),
        title: z.string(),
        categories: z.array(z.string()),
        date: z.string(),
        featured: z.boolean().optional(),
        image: image(),
    })
});

export const collections = {
    posts: postcollection,

}