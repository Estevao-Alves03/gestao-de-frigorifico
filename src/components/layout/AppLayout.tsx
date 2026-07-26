import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarInset } from "../ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Header from "./Header";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <Header />
        <main className="flex-1 pb-10">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
