import { z } from "zod";

export const NewContent = z.object({
  label: z.string(),
  description: z.string(),
  image: z.string
});

export const NewsSchema = z.object({
  id: z.union([z.string(), z.number()]),
  title: z.string(),
  content: z.array(NewContent),
  url: z.string(),
  featured: z.boolean().optional(),
  author: z.string(),
  date_publish: z.string(),
});

export type NewsType = z.infer<typeof NewsSchema>;


export const NewCategorySchema = z.object({
  key: z.string(),
  label: z.string(),
  children: z.array(NewCategorySchema).optional(),
});

export type NewsCategoryType = z.infer<typeof NewCategorySchema>;