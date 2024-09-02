"use server";

import { getUserByEmail, getUserById } from "@/data/user";
import { currentUser } from "@/lib/auth";
import { userSettingsSchema } from "@/schemas/user-settings-schema";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const userSettings = async (
  values: z.infer<typeof userSettingsSchema>
) => {
  const user = await currentUser();

  if (!user) {
    return { error: "Unauthorized!!" };
  }

  const dbUser = await getUserById(user.id as string);

  if (!dbUser) {
    return { error: "Unauthorized!" };
  }

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
  }

  const emailUser = await getUserByEmail(user.email as string);

  if (emailUser && emailUser.id !== user.id) {
    return { error: "Email already in use. Please provide a new email" };
  }

  //password
  if (values.password && values.newPassword && dbUser.password) {
    const passwordMatch = await bcrypt.compare(
      values.password,
      dbUser.password
    );
    if (!passwordMatch) {
      return {
        error:
          "Incorrect Password. Provide your current password to password field!",
      };
    }

    const hashedPassword = await bcrypt.hash(values.newPassword, 10);

    values.password = hashedPassword;
    values.newPassword = undefined;
  }
  try {
    await db.user.update({
      where: { id: dbUser.id },
      data: {
        ...values,
      },
    });
    // revalidatePath(`/users/[id]`);
  } catch (error) {
    console.log({ error: { error } });
    return { error: "something went wrong!!" };
  }

  return { success: "Settings updated!" };
};
