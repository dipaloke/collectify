"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { AddCollectionFormSchema } from "@/schemas/add-collection";
import { z } from "zod";

const uploadFile = async () => {};

// export const addCollection = async (
//   values: z.infer<typeof AddCollectionFormSchema>
// ) => {
//   const validatedFields = AddCollectionFormSchema.safeParse(values);

//   if (!validatedFields.success) {
//     return { error: "Invalid fields!" };
//   }

//   const user = await currentUser();

//   if (!user) {
//     return { error: "Unauthorized!" };
//   }

//   const {
//     name,
//     description,
//     category,
//     imageUrl,
//     customString1,
//     customString2,
//     customString3,
//     customText1,
//     customText2,
//     customText3,
//     customInt1,
//     customInt2,
//     customInt3,
//     customCheckbox1,
//     customCheckbox2,
//     customCheckbox3,
//     customDate1,
//     customDate2,
//     customDate3,
//     customFields,
//     items,
//   } = validatedFields.data;

//   try {
//     const newCollection = await db.collection.create({
//       data: {
//         name,
//         description,
//         category,
//         imageUrl,

//         customString1State: customString1.state,
//         customString1Name: customString1.name || null,
//         customString2State: customString2.state,
//         customString2Name: customString2.name || null,
//         customString3State: customString3.state,
//         customString3Name: customString3.name || null,

//         customText1State: customText1.state,
//         customText1Name: customText1.name || null,
//         customText2State: customText2.state,
//         customText2Name: customText2.name || null,
//         customText3State: customText3.state,
//         customText3Name: customText3.name || null,

//         customInt1State: customInt1.state,
//         customInt1Name: customInt1.name || null,
//         customInt2State: customInt2.state,
//         customInt2Name: customInt2.name || null,
//         customInt3State: customInt3.state,
//         customInt3Name: customInt3.name || null,

//         customCheckbox1State: customCheckbox1.state,
//         customCheckbox1Name: customCheckbox1.name || null,
//         customCheckbox2State: customCheckbox2.state,
//         customCheckbox2Name: customCheckbox2.name || null,
//         customCheckbox3State: customCheckbox3.state,
//         customCheckbox3Name: customCheckbox3.name || null,

//         customDate1State: customDate1.state,
//         customDate1Name: customDate1.name || null,
//         customDate2State: customDate2.state,
//         customDate2Name: customDate2.name || null,
//         customDate3State: customDate3.state,
//         customDate3Name: customDate3.name || null,

//         customFields: customFields || {},

//         items: {
//           create: items || [],
//         },
//         user: {
//           connect: {
//             id: user.id,
//           },
//         },
//       },
//     });
//     return { success: "Collection created", collection: newCollection };
//   } catch (error) {
//     console.error("Error creating collection:", error);
//     return { error: "Failed to create collection. Please try again." };
//   }
// };
export const addCollection = async (
  values: z.infer<typeof AddCollectionFormSchema>
) => {
  const validatedFields = AddCollectionFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const {
    name,
    description,
    category,
    imageUrl,
    customString1,
    customString2,
    customString3,
    customText1,
    customText2,
    customText3,
    customInt1,
    customInt2,
    customInt3,
    customCheckbox1,
    customCheckbox2,
    customCheckbox3,
    customDate1,
    customDate2,
    customDate3,
    customFields,
    items,
  } = validatedFields.data;

  try {
    const newCollection = await db.collection.create({
      data: {
        name,
        description,
        category,
        imageUrl,

        customString1State: customString1.state,
        customString1Name: customString1.name || null,
        customString2State: customString2.state,
        customString2Name: customString2.name || null,
        customString3State: customString3.state,
        customString3Name: customString3.name || null,

        customText1State: customText1.state,
        customText1Name: customText1.name || null,
        customText2State: customText2.state,
        customText2Name: customText2.name || null,
        customText3State: customText3.state,
        customText3Name: customText3.name || null,

        customInt1State: customInt1.state,
        customInt1Name: customInt1.name || null,
        customInt2State: customInt2.state,
        customInt2Name: customInt2.name || null,
        customInt3State: customInt3.state,
        customInt3Name: customInt3.name || null,

        customCheckbox1State: customCheckbox1.state,
        customCheckbox1Name: customCheckbox1.name || null,
        customCheckbox2State: customCheckbox2.state,
        customCheckbox2Name: customCheckbox2.name || null,
        customCheckbox3State: customCheckbox3.state,
        customCheckbox3Name: customCheckbox3.name || null,

        customDate1State: customDate1.state,
        customDate1Name: customDate1.name || null,
        customDate2State: customDate2.state,
        customDate2Name: customDate2.name || null,
        customDate3State: customDate3.state,
        customDate3Name: customDate3.name || null,

        customFields: customFields || {},

        items: {
          create: items || [],
        },
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    return { success: "Collection created", collection: newCollection };
  } catch (error) {
    console.error("Error creating collection:", error);
    return { error: "Failed to create collection. Please try again." };
  }
};
