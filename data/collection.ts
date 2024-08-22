import { currentUser } from "@/lib/auth";
import { db } from "@/lib/db";

export const findALLCollectionById = async (id: string) => {
  try {
    const collections = db.collection.findMany();
    return collections;
  } catch (error) {
    return null;
  }
};

export const collectionsWithChosenFields = async (id: string) => {
  const user = await currentUser();
  try {
    const collections = db.collection.findMany({
      where: {
        userId: user?.id,
      },
      select: {
        id: true,
        name: true,
        imageUrl: true,
        description: true,
        category: true,
        createdAt: true,
      },
    });
    return collections;
  } catch (error) {
    return null;
  }
};
