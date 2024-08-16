"use server";

import { RegistrationSchema } from "@/schemas";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";



export const register = async (values: z.infer<typeof RegistrationSchema>) => {


  const validatedFields = RegistrationSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, name } = validatedFields.data;

  const salt = 10;

  const hashedPassword = await bcrypt.hash(password, salt);

  const exitingUser = await getUserByEmail(email);

  if (exitingUser) {
    return { error: "Email already in use" };
  }

  try {
    await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
  } catch (error) {
    console.log({ error: { error } });
  }
  return { success: "Success! Registration completed" };
};
