import { useLocation } from "react-router-dom";

export default function Header() {

  const location = useLocation()

  const pages: Record<string, string> = {
    "/": "Dashboard",
    "/products": "Produtos",
    "/settings": "Configurações"
  }

  const currentPage = pages[location.pathname] || "Página"

  return (
    <header className="flex items-center justify-between p-2 px-4 border-b">
      {/* dados iniciais */}
      <section className="font-serif text-md">
        <h1>Inicio / {currentPage}</h1>
      </section>
      {/* usuario */}
      <section className="flex items-center gap-4">
        <div>
          <h1 className="font-serif font-medium text-md">Estevão Alves</h1>
          <p className="text-xs font-serif text-right text-gray-400">Administrador</p>
        </div>
        <span className="h-12 w-12 rounded-full border-2 border-gray-300 text-gray-400 flex items-center justify-center font-serif">EA</span>
      </section>
    </header>
  );
}
