import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ExportButton } from "./export-button";
import { AddCollectionButton } from "./add-collection-button";
import { CollectionDataTable } from "../data-table/collection-data-table";
import { columns } from "../data-table/columns";
import { getSingleCollection } from "@/lib/collection";

export const CollectionList = async () => {
  const singleCollection = await getSingleCollection();
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex-1 flex">
          <div className="">
            <CardTitle className="text-md md:text-2xl">
              My Collections
            </CardTitle>
            <CardDescription className="text-sm">
              Manage collections and view their performance.
            </CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <ExportButton />
            <AddCollectionButton />
          </div>
        </div>
      </CardHeader>
      <CardContent className="container mx-auto">
        <CollectionDataTable columns={columns} data={singleCollection} />
      </CardContent>
    </Card>
  );
};
