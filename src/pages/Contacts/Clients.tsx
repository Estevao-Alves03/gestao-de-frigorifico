import { clients } from "../../data/clients";
import { useState } from "react";
import Search from "../../components/common/Search";
import PageHeader from "../../components/layout/PageHeader";
import ClientsModal from "../../components/common/modals/ClientsModal";
import TableActions from "../../components/common/TableActions";
import TableCard from "../../components/common/TableCard";
import TableEmpty from "../../components/common/TableEmpty";

export default function Clients() {
  const grid = "grid grid-cols-[2fr_1fr_2fr_2fr_1.5fr_1fr]";
  const [openModalClients, setOpenModalClients] = useState(false);
  const [search, setSearch] = useState("");

  const clientesFiltrados = clients.filter((client) => {
    const busca = search.toLowerCase();

    return (
      client.name.toLowerCase().includes(busca) ||
      client.documento.includes(busca) ||
      client.telefone.includes(busca)
    );
  });

  return (
    <div className="p-7 pt-8">
      {/* Cabeçalho */}
      <PageHeader
        title="Clientes"
        description="Gerencie o cadastro de seus clientes"
        buttonText="Novo Cliente"
        onButtonClick={() => setOpenModalClients(true)}
      />
      {/* pesquisa */}
      <Search
        value={search}
        onChange={setSearch}
        placeholder="Buscar por CPF/CNPJ, nome ou telefone"
      />
      {/* Conteudo */}
      {clientesFiltrados.length === 0 ? (
        <TableEmpty
          title="Nenhum cliente cadastrado"
          description="Comece cadastrando seus clientes para acompanhar seus dados e histórico de compras."
        />
      ) : (
        <TableCard
          gridColumns={grid}
          headers={[
            "Nome",
            "Tipo",
            "Documento",
            "Telefone",
            "Cidade",
            <div className="flex justify-center">Ações</div>,
          ]}
        >
          {clientesFiltrados.map((client) => (
            <div
              key={client.id}
              className={`${grid} items-center py-3 px-6 border-b border-gray-300 hover:bg-gray-100 last:border-b-0`}
            >
              <p className="font-medium">{client.name}</p>
              <p className="font-medium">{client.tipo}</p>
              <p className="font-medium">{client.documento}</p>
              <p className="font-medium">{client.telefone}</p>
              <p className="font-medium">{client.cidade}</p>

              <TableActions />
            </div>
          ))}
        </TableCard>
      )}

      <ClientsModal
        open={openModalClients}
        onClose={() => setOpenModalClients(false)}
      ></ClientsModal>
    </div>
  );
}
