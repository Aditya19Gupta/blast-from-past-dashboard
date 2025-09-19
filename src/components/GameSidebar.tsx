import { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  Home, 
  Trophy, 
  Users, 
  Bot, 
  Wrench,
  Menu,
  X
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Overview", url: "/", icon: Home },
  { title: "Achievements", url: "/achievements", icon: Trophy },
  { title: "Community", url: "/community", icon: Users },
  { title: "AI Assistant", url: "/ai-assistant", icon: Bot },
  { title: "Tools", url: "/tools", icon: Wrench },
];

export function GameSidebar() {
  const { open, setOpen } = useSidebar();
  
  return (
    <Sidebar
      className={`${!open ? "w-16" : "w-64"} transition-all duration-300 bg-sidebar border-r-4 border-primary`}
      collapsible="icon"
    >
      <div className="p-4 border-b-2 border-primary/20">
        <button
          onClick={() => setOpen(!open)}
          className="pixel-button w-full p-2 text-sm font-bold"
        >
          {!open ? <Menu className="w-4 h-4 mx-auto" /> : <X className="w-4 h-4 mx-auto" />}
        </button>
        {open && (
          <h1 className="text-xl font-bold text-primary mt-3 font-mono tracking-wider">
            ARCADE LEARN
          </h1>
        )}
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2 p-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        `sidebar-item ${isActive ? "active" : ""} ${
                          !open ? "justify-center px-2" : "px-4"
                        }`
                      }
                    >
                      <item.icon className="w-6 h-6 pixel-icon flex-shrink-0" />
                      {open && (
                        <span className="font-mono font-bold text-sm tracking-wide">
                          {item.title.toUpperCase()}
                        </span>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {open && (
          <div className="mt-auto p-4 border-t-2 border-primary/20">
            <div className="pixel-card p-3 bg-card/50">
              <div className="text-xs font-mono text-muted-foreground">
                LEVEL: 12
              </div>
              <div className="pixel-progress mt-1">
                <div className="pixel-progress-fill w-3/4"></div>
              </div>
              <div className="text-xs font-mono text-muted-foreground mt-1">
                XP: 750/1000
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}