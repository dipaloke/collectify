import { Collection } from "@/components/data-table/columns";
import { currentUser } from "./auth";
import { collectionsWithChosenFields } from "@/data/collection";

export const getSingleCollection = async (): Promise<Collection[]> => {
  const user = await currentUser();
  const collections = await collectionsWithChosenFields(user?.id as string);

  return (collections ?? []).map((collection) => ({
    id: collection.id,
    name: collection.name,
    description: collection.description as string,
    category: collection.category,
    image: collection.imageUrl as string,
    creationDate: collection.createdAt,
  }));
};
