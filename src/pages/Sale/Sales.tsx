import { useState } from "react";
import PageHeader from "../../components/layout/PageHeader";
import TableCard from "../../components/common/TableCard";
import TableActions from "../../components/common/TableActions";
import Search from "../../components/common/Search";
import TableEmpty from "../../components/common/TableEmpty";
import SaleModal from "../../components/common/modals/SaleModal";

import { sales } from "../../data/sales";
import { clients } from "../../data/clients";
import SaleDetail from "../../components/common/details/SaleDetail";
import { addresses } from "../../data/addresses";

export default function Sales() {
  const grid = "grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]";

  const [openModalSales, setOpenModalSales] = useState(false);
  const [search, setSearch] = useState("");
  const [salesList, setSalesList] = useState(sales);
  const [selectedSaleId, setSelectedSaleId] = useState<number | null>(null);

  const selectedSale = salesList.find((sale) => sale.id === selectedSaleId);

  const selectedClient = clients.find(
    (client) => client.id === selectedSale?.clienteId,
  );

  const selectedAddress = addresses.find(
    (address) => address.id === selectedClient?.id,
  );

  const vendasFiltradas = salesList.filter((sale) => {
    const busca = search.toLowerCase();

    const client = clients.find((client) => client.id === sale.clienteId);

    return client?.nome.toLowerCase().includes(busca);
  });

  function handleAddSale(newSale: Omit<(typeof sales)[number], "id">) {
    setSalesList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newSale,
      },
    ]);

    setOpenModalSales(false);
  }

  function removeSale(id: number) {
    setSalesList((prev) => prev.filter((sale) => sale.id !== id));
  }

  return (
    <div className="p-7 pt-8">
      <PageHeader
        title="Vendas"
        description="Gerencie todas as suas vendas"
        buttonText="Nova Venda"
        onButtonClick={() => setOpenModalSales(true)}
      />

      {vendasFiltradas.length === 0 ? (
        <TableEmpty
          title="Nenhuma venda encontrada"
          description="Controle os registros de venda aqui quando a movimentação começar"
        />
      ) : (
        <>
          <Search
            value={search}
            onChange={setSearch}
            placeholder="Busque pelo nome do cliente"
          />

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
            {vendasFiltradas.map((sale) => {
              const client = clients.find(
                (client) => client.id === sale.clienteId,
              );

              return (
                <div
                  key={sale.id}
                  onClick={() => setSelectedSaleId(sale.id)}
                  className={`${grid} items-center border-b border-gray-300 hover:bg-gray-100 last:border-b-0 px-6 py-3 cursor-pointer`}
                >
                  <p className="font-medium">{sale.numeroVenda}</p>

                  <p className="font-medium">{client?.nome}</p>

                  <p className="font-medium">{sale.data}</p>

                  <p className="font-medium">{sale.quantidadeItens}</p>

                  <p className="font-medium">R$ {sale.total.toFixed(2)}</p>

                  <p className="font-medium">{sale.pagamento}</p>

                  <div>
                    <span
                      className={
                        sale.status === "Concluído"
                          ? "bg-emerald-200 text-emerald-600 rounded-xl px-3 py-1"
                          : sale.status === "Pendente"
                            ? "bg-amber-200 text-amber-600 rounded-xl px-3 py-1"
                            : "bg-red-200 text-red-600 rounded-xl px-3 py-1"
                      }
                    >
                      {sale.status}
                    </span>
                  </div>

                  <TableActions onDelet={() => removeSale(sale.id)} />
                </div>
              );
            })}
          </TableCard>
        </>
      )}

      <SaleModal
        open={openModalSales}
        onClose={() => setOpenModalSales(false)}
        onAddSale={handleAddSale}
      />

      <SaleDetail
        sale={selectedSale}
        address={selectedAddress}
        client={selectedClient}
        onClose={() => setSelectedSaleId(null)}
      />
    </div>
  );
}
