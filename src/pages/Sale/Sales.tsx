import TableCard from "../../components/common/TableCard";
import PageHeader from "../../components/layout/PageHeader";
import { sales } from "../../data/sales";
import TableActions from "../../components/common/TableActions";
import { useState } from "react";
import SaleModal from "../../components/common/modals/SaleModal";
import Search from "../../components/common/Search";

export default function Sales() {
  const grid = "grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]";
  const [openModalSales, setOpenModalSales] = useState(false);
  const [search, setSearch] = useState("");

  const VendaFiltradas = sales.filter((sale) => {
    const busca = search.toLowerCase();

    return sale.cliente.toLowerCase().includes(busca);
  });

  return (
    <div className="p-7 pt-8">
      {/* cabeçalho */}
      <PageHeader
        title="Vendas"
        description="Gerencie todas as suas vendas"
        buttonText="Nova Venda"
        onButtonClick={() => setOpenModalSales(true)}
      />
      {/* pesquisa */}
      <Search
        value={search}
        onChange={setSearch}
        placeholder="Busque pelo nome do cliente"
      />
      {/* conteudo */}
      <TableCard
        gridColumns={grid}
        headers={[
          "Identificação NF",
          "Cliente",
          "Data",
          "Itens",
          "Total",
          "Pagamento",
          "Status",
          <div className="flex justify-center">Ações</div>,
        ]}
      >
        {VendaFiltradas.map((sale) => (
          <div
            key={sale.id}
            className={`${grid} items-center border-b border-gray-300 hover:bg-gray-100 last:border-b-0 px-6 py-3`}
          >
            <p className="font-medium">{sale.numeroCompra}</p>
            <p className="font-medium">{sale.cliente}</p>
            <p className="font-medium">{sale.data}</p>
            <p className="font-medium">{sale.quantidadeItens} Itens</p>
            <p className="font-medium">R$ {sale.total}</p>
            <p className="font-medium">{sale.pagamento}</p>
            <div>
              <span
                className={
                  sale.status === "Concluído"
                    ? "bg-emerald-200 text-emerald-700 rounded-xl px-3 py-1"
                    : sale.status === "Pendente"
                      ? "bg-yellow-200 text-yellow-700 rounded-xl px-3 py-1"
                      : "bg-red-200 text-red-700 rounded-xl px-3 py-1"
                }
              >
                {sale.status}
              </span>
            </div>
            <TableActions />
          </div>
        ))}
      </TableCard>
      {/* modal */}
      <SaleModal
        onClose={() => setOpenModalSales(false)}
        open={openModalSales}
      ></SaleModal>
    </div>
  );
}
