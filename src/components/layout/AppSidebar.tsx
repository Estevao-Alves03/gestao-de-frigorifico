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

import CategoryForm from "../forms/CategoryForm";

import { TbMeat } from "react-icons/tb";
import { BsFillBoxFill } from "react-icons/bs";
import { MdOutlineDashboard, MdLogout, MdOutlineShoppingCart } from "react-icons/md";
import { GoGear } from "react-icons/go";
import { LuHandshake } from "react-icons/lu";
import { ChevronDown } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { useState } from "react";
import CutsForm from "../forms/CutsForm";
import { FaUserPlus } from "react-icons/fa6";
import CategoryModal from "../common/modals/CategoryModal";
import CutsModal from "../common/modals/CutsModal";

export function AppSidebar() {
  const [openCategoryModal, setOpenCategoryModal] = useState(false); // modal das categorias
  const [openCutsModal, setOpenCutsModal] = useState(false); // modal dos cortes

  return (
    <Sidebar>
      {/* Header */}
      <h1 className="text-md font-medium p-4 border-b flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg border-2 flex items-center justify-center">
          <TbMeat className="text-xl" />
        </div>
        FrigoTech
      </h1>

      {/* Conteúdo */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {/* Dashboard */}
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
                    cursor-pointer
                  "
                >
                  <MdOutlineDashboard />
                  Dashboard
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Produtos */}
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
                    cursor-pointer
                  "
                >
                  <BsFillBoxFill />
                  Produtos
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Fornecedores */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/suppliers" />}
                  className="
                    h-11
                    rounded-lg
                    text-sm
                    font-medium
                    transition-all
                    hover:bg-primary/10
                    hover:text-primary
                    gap-4
                    cursor-pointer
                  "
                >
                  <LuHandshake />
                  Fornecedores
                </SidebarMenuButton>
              </SidebarMenuItem>

                {/* Clientes */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/clients" />}
                  className="
                    h-11
                    rounded-lg
                    text-sm
                    font-medium
                    transition-all
                    hover:bg-primary/10
                    hover:text-primary
                    gap-4
                    cursor-pointer
                  "
                >
                  <FaUserPlus />
                  Clientes
                </SidebarMenuButton>
              </SidebarMenuItem>

                {/* Vendas */}
              <SidebarMenuItem>
                <SidebarMenuButton
                  render={<Link to="/sales" />}
                  className="
                    h-11
                    rounded-lg
                    text-sm
                    font-medium
                    transition-all
                    hover:bg-primary/10
                    hover:text-primary
                    gap-4
                    cursor-pointer
                  "
                >
                  <MdOutlineShoppingCart />
                  Venda
                </SidebarMenuButton>
              </SidebarMenuItem>


              

              {/* Cadastros */}
              <SidebarMenuItem>
                <Collapsible className="w-full">
                  <CollapsibleTrigger className="w-full">
                    <SidebarMenuButton
                      className="
                        w-full
                        h-11
                        rounded-lg
                        text-sm
                        font-medium
                        transition-all
                        hover:bg-primary/10
                        hover:text-primary
                        gap-4
                        group
                        cursor-pointer
                      "
                    >
                      <GoGear />
                      Cadastros
                      <ChevronDown
                        className="
                          ml-auto
                          transition-transform
                          duration-200
                          group-data-[state=open]:rotate-180
                        "
                      />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>

                  {/* Categoria */}
                  <CollapsibleContent>
                    <div
                      className="
                        mt-1
                        ml-4
                        border-l
                        pl-3
                        space-y-1
                      "
                    >
                      <SidebarMenuButton
                        onClick={() => setOpenCategoryModal(true)}
                        className="
                          h-9
                          w-full
                          rounded-lg
                          text-sm
                          text-muted-foreground
                          hover:bg-primary/10
                          hover:text-primary
                          cursor-pointer
                        "
                      >
                        Categorias
                      </SidebarMenuButton>

                      {/* Cortes */}
                      <SidebarMenuButton
                        onClick={() => setOpenCutsModal(true)}
                        className="
                          h-9
                          w-full
                          rounded-lg
                          text-sm
                          text-muted-foreground
                          hover:bg-primary/10
                          hover:text-primary
                          cursor-pointer
                        "
                      >
                        Cortes
                      </SidebarMenuButton>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className="
                h-11
                rounded-lg
                gap-4
                font-medium
                hover:bg-primary/10
                hover:text-primary
                cursor-pointer
              "
            >
              <GoGear />
              Configurações
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              className="
                h-11
                rounded-lg
                gap-4
                font-medium
                hover:bg-primary/10
                hover:text-primary
                cursor-pointer
              "
            >
              <MdLogout />
              Sair
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      {/* Comunicação do pai com o modal - category */}
      <CategoryModal
        open={openCategoryModal}
        onClose={() => setOpenCategoryModal(false)}
      >
        <CategoryForm onCancel={() => setOpenCategoryModal(false)} />
      </CategoryModal>
      {/* Comunicaçao do pai com o modal - cuts */}
      <CutsModal
        open={openCutsModal}
        onClose={() => setOpenCutsModal(false)}
      >
        <CutsForm onCancel={() => setOpenCutsModal(false)}/>
      </CutsModal>
    </Sidebar>
  );
}
