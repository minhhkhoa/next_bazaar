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
  author: z.string(),
  date_publish: z.string(),
});

export type News = z.infer<typeof NewsSchema>;
