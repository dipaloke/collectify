import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { CollectionFilter } from "./collectio-filter";
import { ExportButton } from "./export-button";
import { AddCollectionButton } from "./add-collection-button";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MoveHorizontalIcon } from "lucide-react";
import { currentUser } from "@/lib/auth";
import { findCollectionById } from "@/data/collection";
import { Date } from "../date";

// TODO: Make the table dynamic by using shadCn TABLE

export const CollectionList = async () => {
  const user = await currentUser();
  const collections = await findCollectionById(user?.id as string);

  return (
    <Card>
      <CardHeader>
        <div className="flex-1 flex">
          <div>
            <CardTitle>My Collections</CardTitle>
            <CardDescription>
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
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="hidden md:table-cell">
                Description
              </TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {collections
              ? collections.map((collection) => (
                  <TableRow key={collection.id}>
                    <TableCell className="hidden sm:table-cell">
                      <Image
                        alt={collection.name}
                        className="aspect-square rounded-md object-cover"
                        height="64"
                        src={
                          collection.imageUrl
                            ? collection.imageUrl
                            : "images/placeholder.svg"
                        }
                        width="64"
                      />
                    </TableCell>
                    <TableCell className="font-medium">
                      {collection.name}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{collection.category}</Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {collection.description}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      <Date createdAt={collection.createdAt} />
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            aria-haspopup="true"
                            size="icon"
                            variant="ghost"
                          >
                            <MoveHorizontalIcon className="h-4 w-4" />
                            <span className="sr-only">Toggle menu</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>
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
