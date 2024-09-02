"use client";

import { Category } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Date } from "../date";
import Image from "next/image";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ArrowUpDown, EllipsisVerticalIcon, MoveHorizontalIcon } from "lucide-react";
import { DeleteOneCollection } from "@/actions/delete-collection";

export type Collection = {
  id: string;
  image: string;
  name: string;
  description: string;
  category: Category;
  creationDate: Date | string | Number;
};

export const columns: ColumnDef<Collection>[] = [
  {
    accessorKey: "image",
    header: () => <div className="text-left">Image</div>,
    cell: ({ row }) => {
      const image = row.getValue("image") as string;
      return (
        <Image
          alt="Image"
          src={image ? image : "/images/placeholder.svg"}
          className="aspect-square rounded-md object-cover"
          height="64"
          width="64"
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      return <div className="font-bold">{name}</div>;
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Category
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

    cell: ({ row }) => {
      const category = row.getValue("category") as Category;
      return (
        <Badge variant="outline" className="shadow-sm bg-indigo-300/15 text-center">
          {category}
        </Badge>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => <div className="text-left">Description</div>,
    cell: ({ row }) => {
      const data = row.getValue("description") as string;
      const description = data.split(" ").slice(0, 6).join(" ") + "...";
      return (
        <div className="text-lest">
          {description}
        </div>
      );
    },
  },
  {
    accessorKey: "creationDate",
    header: () => <div className="hidden md:table-cell">Creation Date</div>,
    cell: ({ row }) => {
      const date = row.getValue("creationDate");
      return (
        <div className="hidden md:table-cell">
          <Date createdAt={date as Date} />
        </div>
      );
    },
  },
  {
    id: "action",
    cell: ({ row }) => {
      const collectionData = row.original;
      const data = collectionData.id.toString();
      // console.log({ data: data.id.toString() });
      const onDelete = () => {
        DeleteOneCollection({ id: data });
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <EllipsisVerticalIcon className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={onDelete}>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
