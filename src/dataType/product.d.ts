import { z } from "zod";

// Sub-schema cho ObjectId: các id được bọc trong object { "$oid": "..." }
const ObjectIdSchema = z.object({
  $oid: z.string(),
});

// Sub-schema cho Date: ngày được bọc trong object { "$date": "..." }
const DateSchema = z.object({
  $date: z.string(),
});

// Schema cho các đối tượng trong updatedBy
const UpdatedBySchema = z.object({
  account_id: z.string(),
  updatedAt: DateSchema,
  _id: ObjectIdSchema,
});

// Schema cho product
export const ProductSchema = z.object({
  _id: ObjectIdSchema,
  title: z.string(),
  description: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  stock: z.number(),
  thumbnail: z.string(),
  status: z.string(),
  position: z.number(),
  deleted: z.boolean(),
  product_category_id: z.string(),
  slug: z.string(),
  updatedAt: DateSchema,
  updatedBy: z.array(UpdatedBySchema),
});
