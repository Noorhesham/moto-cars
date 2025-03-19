"use client";
import { IProduct } from "@/app/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import ModelCustom from "@/app/components/ModelCustom";
import DeleteSingle from "@/app/components/DeleteSingle";
import { ProductForm } from "./create/ProductForm";

export const productColumns: ColumnDef<IProduct>[] = [
  {
    accessorKey: "starter.backgroundImage",
    header: "الصورة الرئيسية",
    cell: ({ row }) => {
      const backgroundImage = row.original.starter.backgroundImage;
      return (
        <div className="w-20 h-20 relative">
          <Image src={backgroundImage} alt="Background Image" fill className="object-cover rounded" />
        </div>
      );
    },
  },
  {
    accessorKey: "starter.name",
    header: "الاسم",
    cell: ({ row }) => {
      const name = row.original.starter.name;
      return `${name.en} / ${name.ar}`;
    },
  },
  {
    accessorKey: "starter.title",
    header: "العنوان",
    cell: ({ row }) => {
      const title = row.original.starter.title;
      return `${title.en} / ${title.ar}`;
    },
  },

  {
    accessorKey: "titleFeatures",
    header: "عنوان الميزات",
    cell: ({ row }) => {
      const titleFeatures = row.original.titleFeatures;
      return `${titleFeatures.en} / ${titleFeatures.ar}`;
    },
  },
  {
    accessorKey: "colors",
    header: "الألوان",
    cell: ({ row }) => {
      const colors = row.original.colors;
      return colors.length > 0 ? colors[0].color : "لا توجد ألوان";
    },
  },
  {
    accessorKey: "stats",
    header: "الإحصائيات",
    cell: ({ row }) => {
      const stats = row.original.stats;
      return stats.length > 0
        ? `${stats[0].prefix.en} / ${stats[0].prefix.ar}: ${stats[0].number}`
        : "لا توجد إحصائيات";
    },
  },
  {
    accessorKey: "content",
    header: "المحتوى",
    cell: ({ row }) => {
      const content = row.original.content;
      return `${content.en.substring(0, 20)}... / ${content.ar.substring(0, 20)}...`;
    },
  },
  {
    accessorKey: "createdAt",
    header: "تاريخ الإنشاء",
    cell: ({ row }) => new Date(row.original.createdAt).toLocaleDateString(),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const product = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">فتح القائمة</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col gap-2" align="end">
            <DropdownMenuItem asChild>
              <Link href={`/product/${product._id}`}>عرض المنتج</Link>
            </DropdownMenuItem>
            <ModelCustom
              btn={<Button className="w-full">تعديل</Button>}
              title="تعديل المنتج"
              content={<ProductForm initialData={product} />}
            />
            <DeleteSingle data={product} entity="Product" />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
