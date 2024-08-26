import * as z from "zod";

const CustomFieldSchema = z.object({
  state: z.boolean().default(false), // Checkbox controls this
  name: z.string().optional(), // Name of the custom field
});

export const AddCollectionFormSchema = z
  .object({
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
  })
  .refine(
    (data) => {
      const customFields = [
        "customString1",
        "customString2",
        "customString3",
        "customText1",
        "customText2",
        "customText3",
        "customInt1",
        "customInt2",
        "customInt3",
        "customCheckbox1",
        "customCheckbox2",
        "customCheckbox3",
        "customDate1",
        "customDate2",
        "customDate3",
      ];
      
      for (const field of customFields) {
        const customField = data[field as keyof typeof data] as z.infer<
          typeof CustomFieldSchema
        >;

        if (customField.state && customField.name) {
          return false;
        }
        if (customField.state && customField.name) {
          return false;
        }

        return true;
      }
    },
    {
      message:
        "For custom fields, the name must be provided if the checkbox is checked, and must be empty if unchecked.",
      path: [],
    }
  );