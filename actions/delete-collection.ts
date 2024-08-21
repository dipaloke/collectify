"use server";

import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { DeleteSingleCollection } from "@/schemas/delete-collection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

export const DeleteOneCollection = async (
  value: z.infer<typeof DeleteSingleCollection>
) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!" };
  }

  const { id } = value;

  let collection;

  try {
    collection = await db.collection.delete({
      where: {
        id,
      },
    });
  } catch (error) {
    console.error(error)
    return {
        error: "Failed to Delete"
    }
  }
  revalidatePath(`/users/${id}`)
  redirect(`/users/${id}`)
};
