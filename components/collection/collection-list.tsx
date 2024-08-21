import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CollectionFilter } from "./collectio-filter";
import { ExportButton } from "./export-button";
import { AddCollectionButton } from "./add-collection-button";
import { CollectionDataTable } from "../data-table/collection-data-table";
import { columns } from "../data-table/columns";
import { getSingleCollection } from "@/lib/collection";



//TODO: create pagianation and filter

export const CollectionList = async () => {
  const singleCollection = await getSingleCollection();
  return (
    <Card>
      <CardHeader>
        <div className="flex-1 flex">
          <div className="">
            <CardTitle className="text-md md:text-2xl">My Collections</CardTitle>
            <CardDescription className="text-sm">
              Manage collections and view their performance.
            </CardDescription>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <CollectionFilter />
            <ExportButton />
            <AddCollectionButton />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <CollectionDataTable columns={columns} data={singleCollection} />
      </CardContent>
      <CardFooter>
        {/* TODO: make dynamic */}
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of <strong>32</strong>
          products
        </div>
      </CardFooter>
    </Card>
  );
};
