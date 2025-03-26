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
import { IUser } from "@/app/types";
import ModelCustom from "@/app/components/ModelCustom";
import DeleteSingle from "@/app/components/DeleteSingle";
import { UserForm } from "./UserForm";
import { useTranslations } from "next-intl";

export const userColumns: ColumnDef<IUser>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      const t = useTranslations("dashboard.users.columns");
      return t("name");
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      const t = useTranslations("dashboard.users.columns");
      return t("email");
    },
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      const t = useTranslations("dashboard.users.columns");
      return t("role");
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      const t = useTranslations("dashboard.users.columns");
      return t("status");
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;
      const t = useTranslations("dashboard.users.actions");

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
              <Link href={`/users/${user.id}`}>{t("view")}</Link>
            </DropdownMenuItem>
            <ModelCustom
              btn={<Button className="w-full">{t("edit")}</Button>}
              title="Edit User"
              content={<UserForm initialData={user} />}
            />
            <DeleteSingle data={user} entity="User" />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
