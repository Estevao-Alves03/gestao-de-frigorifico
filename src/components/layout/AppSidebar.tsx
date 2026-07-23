import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarFooter,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { TbMeat } from "react-icons/tb";
import { BsFillBoxFill } from "react-icons/bs";
import { MdOutlineDashboard } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { MdLogout } from "react-icons/md";

export function AppSidebar() {
  return (
    <Sidebar>
      {/* Header */}
      <h1 className="text-md font-medium p-4 border-b flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg border-2 flex items-center justify-center">
          <TbMeat className="text-xl" />
        </div>
        FrigoTech 
      </h1>

      {/* Conteudo central */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/" />}
                  className="
                      h-11 
                      rounded-lg
                      text-sm
                      font-medium
                      transition-all
                      hover:bg-primary/10
                      hover:text-primary
                      gap-4
                    "
                >
                  <MdOutlineDashboard />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/products" />}
                  className="
                      h-11 
                      rounded-lg
                      text-sm
                      font-medium
                      transition-all
                      hover:bg-primary/10
                      hover:text-primary
                      gap-4
                    "
                >
                  <BsFillBoxFill className="text-gray-700" />
                  Produtos
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="h-11 roudend-lg gap-4 font-medium hover:bg-primary/10 hover:text-primary">
              <GoGear />
              Configurações
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton className="h-11 roudend-lg gap-4 font-medium hover:bg-primary/10 hover:text-primary">
              <MdLogout />
              Sair
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
