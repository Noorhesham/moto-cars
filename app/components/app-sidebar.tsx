"use client";
import type * as React from "react";
import {
  Home,
  Package,
  PlusCircle,
  FileText,
  FilePlus,
  Users,
  LayoutDashboard,
  LogOut,
  BriefcaseBusinessIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { redirect, usePathname } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Management",
      url: "/dashboard",
      items: [
        {
          title: "Home",
          url: "/dashboard",
          icon: Home,
        },
        {
          title: "Products",
          url: "/dashboard/products",
          icon: Package,
        },
        {
          title: "Create Product",
          url: "/dashboard/products/create",
          icon: PlusCircle,
        },
        {
          title: "Blogs",
          url: "/dashboard/blogs",
          icon: FileText,
        },
        {
          title: "Create Blog",
          url: "/dashboard/blogs/create",
          icon: FilePlus,
        },
        {
          title: "Users",
          url: "/dashboard/user",
          icon: Users,
        },
        {
          title: "Business",
          url: "/dashboard/business",
          icon: BriefcaseBusinessIcon,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const session = useSession();
  return (
    <Sidebar {...props}>
      <SidebarHeader className="pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <LayoutDashboard className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Admin Dashboard</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === item.url}
                      className="transition-colors duration-200"
                    >
                      <a href={item.url}>
                        {item.icon && <item.icon className="size-4" />}
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="mt-auto border-t pt-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" alt="User" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Admin User</span>
                  <span className="text-xs text-muted-foreground">{session.data?.user?.email}</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Button
                onClick={async () => {
                  await signOut();
                  redirect("/");
                }}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-destructive hover:text-destructive"
              >
                <LogOut className="mr-2 size-4" />
                <span>Log out</span>
              </Button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
