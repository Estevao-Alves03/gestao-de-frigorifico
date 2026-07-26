import { useLocation } from "react-router-dom";
import { SidebarTrigger } from "../ui/sidebar";

export default function Header() {
  const location = useLocation();

  const pages: Record<string, string> = {
    "/": "Dashboard",
    "/products": "Produtos",
    "/settings": "Configurações",
    "/suppliers": "Fornecedores",
    "/clients": "Clientes",
    "/sales": "Vendas",
  };

  const currentPage = pages[location.pathname] || "Página";

  return (
    <header
      className="
        h-16
        flex
        items-center
        justify-between
        px-4
        border-b
        bg-background
      "
    >
      <section className="flex items-center gap-3">
        <SidebarTrigger />

        <h1 className="font-serif text-md">Inicio / {currentPage}</h1>
      </section>

      <section className="flex items-center gap-4">
        <div>
          <h1 className="font-serif font-medium text-md">Estevão Alves</h1>

          <p className="text-xs font-serif text-right text-gray-400">
            Administrador
          </p>
        </div>

        <span
          className="
            h-12
            w-12
            rounded-full
            border-2
            border-gray-300
            text-gray-400
            flex
            items-center
            justify-center
            font-serif
          "
        >
          EA
        </span>
      </section>
    </header>
  );
}
