import { Home, BadgeDollarSign, Info } from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "الرئيسية", url: "/", icon: Home },
  { title: "سبائك الذهب", url: "/gold-bars", icon: BadgeDollarSign },
  { title: "من نحن", url: "/about", icon: Info },
];

export function AppSidebar() {
  const { open } = useSidebar();

  return (
    <Sidebar side="right" className="border-l border-gray-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold text-primary py-6 text-right">
            القائمة الرئيسية
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-right ${
                          isActive
                            ? "bg-primary/10 text-primary font-bold"
                            : "text-gray-700 hover:bg-gray-100"
                        }`
                      }
                    >
                      <span className="flex-1">{item.title}</span>
                      <item.icon className="h-5 w-5" />
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
