import { db } from "@/lib/db";

export const findCollectionById = async (id: string) => {
  try {
    const collections = db.collection.findMany();
    return collections
  } catch (error) {
    return null
  }
};

