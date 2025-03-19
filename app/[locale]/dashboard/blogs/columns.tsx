"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import { IBlog } from "@/app/types";
import ModelCustom from "@/app/components/ModelCustom";
import DeleteSingle from "@/app/components/DeleteSingle";
import { BlogForm } from "./create/BlogForm";

export const blogColumns: ColumnDef<IBlog>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => {
      const title = row.original.title;
      return `${title.en} / ${title.ar}`;
    },
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    accessorKey: "sections",
    header: "Sections",
    cell: ({ row }) => {
      const sections = row.original.sections;
      return sections.length;
    },
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const blog = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href={`/blog/${blog.slug}`}>View Blog</Link>
            </DropdownMenuItem>
            <ModelCustom
              btn={<Button className="w-full">Edit</Button>}
              title="Edit Blog"
              content={<BlogForm initialData={blog} />}
            />
            <DeleteSingle data={blog} entity="Blog" />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
