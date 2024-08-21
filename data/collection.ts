import { db } from "@/lib/db";

export const findCollectionById = async (id: string) => {
  try {
    const collections = db.collection.findMany();
    return collections;
  } catch (error) {
    return null;
  }
};

export const collectionsWithChosenFields = async (id: string) => {
  try {
    const collections = db.collection.findMany({
      select: {
        id: true,
        name: true,
        imageUrl: true,
        description: true,
        category: true,
        createdAt: true,
      },
    });
    return collections
  } catch (error) {
    return null;
  }
};
