import { v4 as uuidV4 } from "uuid";
import { currentUser } from "./auth";
import { getUserByEmail } from "@/data/user";
import { db } from "./db";

export const generateVerificationToken = async (email: string) => {
  const user = await currentUser();

  if (!user) return "Unauthorized!" 

  const userByEmail = await getUserByEmail(user.email as string);

  if (!userByEmail?.apiToken) {
    const token = uuidV4();
    await db.user.update({
      where: { email: user.email as string },
      data: { apiToken: token },
    });
    return token;
  }
  return userByEmail.apiToken;
};
