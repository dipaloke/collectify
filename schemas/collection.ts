import { z } from "zod";

const CustomFieldSchema = z
  .object({
    name: z.string().optional(),
    state: z.boolean().optional(),
  })
  .transform((data) => {
    if (data.name && data.name.length > 0) {
      return { ...data, state: true };
    }
    return { ...data, state: false };
  });

const CollectionSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(10, "Collection name must be less than 10 characters"),
  description: z
    .string()
    .max(100, "Description must be less than 100 characters"),
  category: z.enum(["BOOK", "COINS", "SILVERWARE", "ANIME", "OTHERS"]), // Replace with your actual categories
  imageUrl: z.string().url().optional(),

  customString1: CustomFieldSchema,
  customString2: CustomFieldSchema,
  customString3: CustomFieldSchema,

  customText1: CustomFieldSchema,
  customText2: CustomFieldSchema,
  customText3: CustomFieldSchema,

  customInt1: CustomFieldSchema,
  customInt2: CustomFieldSchema,
  customInt3: CustomFieldSchema,

  customCheckbox1: CustomFieldSchema,
  customCheckbox2: CustomFieldSchema,
  customCheckbox3: CustomFieldSchema,

  customDate1: CustomFieldSchema,
  customDate2: CustomFieldSchema,
  customDate3: CustomFieldSchema,

  customFields: z.record(z.any()).optional(),
  items: z.array(z.any()).optional(),

  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export default CollectionSchema;
