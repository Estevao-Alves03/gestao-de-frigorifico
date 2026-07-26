import { suppliers } from "../../data/suppliers";
import { useState } from "react";
import Search from "../../components/common/Search";
import PageHeader from "../../components/layout/PageHeader";
import SuppliersModal from "../../components/common/modals/SuppliersModal";
import TableActions from "../../components/common/TableActions";
import TableCard from "../../components/common/TableCard";
import TableEmpty from "../../components/common/TableEmpty";
import { addresses } from "../../data/addresses";

export default function Suppliers() {
  const grid = "grid grid-cols-[3.8fr_2fr_2fr_2fr_1fr_1fr]";

  const [openModalSuppliers, setOpenModalSuppliers] = useState(false);
  const [search, setSearch] = useState("");
  const [suppliersList, setSuppliersList] = useState(suppliers);
  const [addressesList, setAddressesList] = useState(addresses)

  const fornecedoresFiltrados = suppliersList.filter((supplier) => {
    const busca = search.toLowerCase();

    return (
      supplier.empresa.toLowerCase().includes(busca) ||
      supplier.telefone.includes(busca) ||
      supplier.responsavel.toLowerCase().includes(busca)
    );
  });

  const AddSupplier = (
    newSupplier: Omit<(typeof suppliers)[number], "id" | "status">,
  ) => {
    setSuppliersList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        status: true,
        ...newSupplier,
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

  const removeSuppliers = (id: number) => {
    setSuppliersList((prev) => prev.filter((supplier) => supplier.id !== id));
  };

  return (
    <div className="p-7 pt-8">
      {/* titulo */}
      <PageHeader
        title="Fornecedores"
        description="Gerencie seus fornecedores e parceiros comerciais"
        buttonText="Novo Fornecedor"
        onButtonClick={() => setOpenModalSuppliers(true)}
      />

      {/* conteudo */}
      {fornecedoresFiltrados.length === 0 ? (
        <TableEmpty
          title="Nenhum fornecedor encontrado"
          description="Cadastre seus fornecedores para organizar seus parceiros comerciais e facilitar o controle do estoque."
        />
      ) : (
        <>
          {/* pesquisa */}
          <Search
            placeholder="Buscar por responsável, empresa ou telefone"
            value={search}
            onChange={setSearch}
          />

          <TableCard
            gridColumns={grid}
            headers={[
              "Empresa",
              "Responsável",
              "Telefone",
              "Cidade",
              "Status",
              <div className="flex justify-center">Ações</div>,
            ]}
          >
            {fornecedoresFiltrados.map((supplier) => {
              const endereco = addresses.find(
                (address) => address.id === supplier.enderecoId,
              );

              return (
                <div
                  key={supplier.id}
                  className={`${grid} items-center border-b border-gray-300 hover:bg-gray-100 px-6 py-3 last:border-b-0`}
                >
                  <p className="font-medium">{supplier.empresa}</p>

                  <p className="font-medium">{supplier.responsavel}</p>

                  <p className="font-medium">{supplier.telefone}</p>

                  <p className="font-medium">{endereco?.cidade}</p>

                  <div className="flex justify-start">
                    <span
                      className={
                        supplier.status
                          ? "rounded-xl text-emerald-700 bg-emerald-200 px-3 py-1"
                          : "rounded-xl text-gray-500 bg-gray-200 px-3 py-1"
                      }
                    >
                      {supplier.status ? "Ativo" : "Inativo"}
                    </span>
                  </div>

                  <TableActions onDelet={() => removeSuppliers(supplier.id)} />
                </div>
              );
            })}
          </TableCard>
        </>
      )}

      <SuppliersModal
        open={openModalSuppliers}
        onClose={() => setOpenModalSuppliers(false)}
        onAddSupplier={AddSupplier}
        onAddAddress={addAddress}
      ></SuppliersModal>
    </div>
  );
}
