
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Wand2, UserSquare, Settings } from "lucide-react"; // Changed Home to UserSquare
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navItems = [
  { href: "/", label: "Portfolio", icon: UserSquare }, // Updated label and icon
  { href: "/tailor", label: "Tailor Resume (AI)", icon: Wand2 },
  // { href: "/settings", label: "Settings", icon: Settings }, // Future use
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader className="p-4">
        <Link href="/" className="flex items-center gap-2">
          <FileText className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-semibold text-foreground group-data-[collapsible=icon]:hidden">
            Portfolio AI
          </h1>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href} passHref legacyBehavior>
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href}
                  tooltip={item.label}
                >
                  <a>
                    <item.icon />
                    <span>{item.label}</span>
                  </a>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
        <Separator className="my-2" />
        <div className="group-data-[collapsible=icon]:hidden">
          <p className="text-xs text-muted-foreground">
            Press <kbd className="px-1.5 py-0.5 border rounded bg-muted font-mono text-xs">Ctrl/Cmd + B</kbd> to toggle sidebar.
          </p>
        </div>
        <div className="md:hidden mt-2">
           <SidebarTrigger/>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
