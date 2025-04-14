import { z } from "zod";

// Sub-schema cho ObjectId: dùng cho các trường có cấu trúc {_id: {$oid: "..." }}
const ObjectIdSchema = z.object({
  $oid: z.string(),
});

// Sub-schema cho Date: dùng cho các trường có cấu trúc { "$date": "..." }
const DateSchema = z.object({
  $date: z.string(),
});

// Schema cho Category
export const CategorySchema = z.object({
  _id: ObjectIdSchema,
  title: z.string(),
  parent_id: z.string(), // Nếu parent_id là string rỗng khi không có, vẫn giữ kiểu string
  description: z.string(),
  status: z.string(),
  position: z.number(),
  deleted: z.boolean(),
  createdAt: DateSchema,
  updatedAt: DateSchema,
  slug: z.string(),
  __v: z.number(),
  thumbnail: z.string(),
});

export type Category = z.infer<typeof CategorySchema>;
