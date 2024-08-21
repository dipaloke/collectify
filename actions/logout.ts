"use server";
import { signOut } from "@/auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const logOut = async () => {
  await signOut();
  revalidatePath(`/`);
  redirect(`/`);
};
