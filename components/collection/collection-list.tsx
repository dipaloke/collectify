import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ExportButton } from "./export-button";
import { AddCollectionButton } from "../add-collection/add-collection-button";
import { CollectionDataTable } from "../data-table/collection-data-table";
import { columns } from "../data-table/columns";
import { getSingleCollection } from "@/lib/collection";
import { Button } from "../ui/button";
import { CirclePlusIcon } from "lucide-react";
import Link from "next/link";

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
            <Button asChild size="sm" className="h-8 gap-1">
              <Link href="/create-collection">
                <CirclePlusIcon className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Add Collection
                </span>
              </Link>
            </Button>

            {/* <AddCollectionButton asChild>
            </AddCollectionButton> */}
          </div>
        </div>
      </CardHeader>
      <CardContent className="container mx-auto">
        <CollectionDataTable columns={columns} data={singleCollection} />
      </CardContent>
    </Card>
  );
};
