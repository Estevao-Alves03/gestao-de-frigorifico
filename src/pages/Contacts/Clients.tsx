import { clients } from "../../data/clients";
import { useState } from "react";
import Search from "../../components/common/Search";
import PageHeader from "../../components/layout/PageHeader";
import ClientsModal from "../../components/common/modals/ClientsModal";
import TableActions from "../../components/common/TableActions";
import TableCard from "../../components/common/TableCard";
import TableEmpty from "../../components/common/TableEmpty";
import { addresses } from "../../data/addresses";

export default function Clients() {
  const grid = "grid grid-cols-[2fr_1fr_2fr_2fr_1.5fr_1fr]";
  const [openModalClients, setOpenModalClients] = useState(false);
  const [search, setSearch] = useState("");
  const [clientsList, setClientsList] = useState(clients);
  const [addressesList, setAddressesList] = useState(addresses);

  const clientesFiltrados = clientsList.filter((client) => {
    const busca = search.toLowerCase();

    return (
      client.nome.toLowerCase().includes(busca) ||
      client.documento.includes(busca) ||
      client.telefone.includes(busca)
    );
  });

  const addClient = (newClient: Omit<(typeof clients)[number], "id">) => {
    setClientsList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newClient,
      },
    ]);
  };

  const addAddress = (newAddress: Omit<(typeof addresses)[number], "id">) => {
    const newId = addressesList.length + 1;

    setAddressesList((prev) => [
      ...prev,
      {
        id: newId,
        ...newAddress,
      },
    ]);

    return newId;
  };

  const removeClient = (id: number) => {
    setClientsList((prev) => prev.filter((client) => client.id !== id));
  };

  return (
    <div className="p-7 pt-8">
      {/* Cabeçalho */}
      <PageHeader
        title="Clientes"
        description="Gerencie o cadastro de seus clientes"
        buttonText="Novo Cliente"
        onButtonClick={() => setOpenModalClients(true)}
      />

      {/* Conteudo */}
      {clientesFiltrados.length === 0 ? (
        <TableEmpty
          title="Nenhum cliente cadastrado"
          description="Comece cadastrando seus clientes para acompanhar seus dados e histórico de compras."
        />
      ) : (
        <>
          {/* pesquisa */}
          <Search
            value={search}
            onChange={setSearch}
            placeholder="Buscar por CPF/CNPJ, nome ou telefone"
          />
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
            {clientesFiltrados.map((client) => {
              const endereco = addressesList.find(
                (address) => address.id === client.enderecoId,
              );

              return (
                <div
                  key={client.id}
                  className={`${grid} items-center py-3 px-6 border-b border-gray-300 last:border-b-0 hover:bg-gray-100`}
                >
                  <p>{client.nome}</p>
                  <p>{client.tipo}</p>
                  <p>{client.documento}</p>
                  <p>{client.telefone}</p>

                  <p>{endereco?.cidade}</p>

                  <TableActions onDelet={() => removeClient(client.id)} />
                </div>
              );
            })}
          </TableCard>
        </>
      )}

      <ClientsModal
        open={openModalClients}
        onClose={() => setOpenModalClients(false)}
        onAddClient={addClient}
        onAddAddress={addAddress}
      ></ClientsModal>
    </div>
  );
}
