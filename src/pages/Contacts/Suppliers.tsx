import { suppliers } from "../../data/suppliers";
import { useState } from "react";
import Search from "../../components/common/Search";
import PageHeader from "../../components/layout/PageHeader";
import SuppliersModal from "../../components/common/modals/SuppliersModal";
import TableActions from "../../components/common/TableActions";
import TableCard from "../../components/common/TableCard";
import TableEmpty from "../../components/common/TableEmpty";

export default function Suppliers() {
  const grid = "grid grid-cols-[3.8fr_2fr_2fr_2fr_1fr_1fr]";

  const [openModalSuppliers, setOpenModalSuppliers] = useState(false);
  const [search, setSearch] = useState("");

  const fornecedoresFiltrados = suppliers.filter((supplier) => {
    const busca = search.toLowerCase();

    return (
      supplier.company.toLowerCase().includes(busca) ||
      supplier.phone.includes(busca) ||
      supplier.responsible.toLowerCase().includes(busca)
    );
  });

  return (
    <div className="p-7 pt-8">
      {/* titulo */}
      <PageHeader
        title="Fornecedores"
        description="Gerencie seus fornecedores e parceiros comerciais"
        buttonText="Novo Fornecedor"
        onButtonClick={() => setOpenModalSuppliers(true)}
      />
      {/* pesquisa */}
      <Search
        placeholder="Buscar por responsável, empresa ou telefone"
        value={search}
        onChange={setSearch}
      />

      {/* conteudo */}
      {fornecedoresFiltrados.length === 0 ? (
        <TableEmpty
          title="Nenhum fornecedor encontrado"
          description="Cadastre seus fornecedores para organizar seus parceiros comerciais e facilitar o controle do estoque."
        />
      ) : (
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
          {fornecedoresFiltrados.map((suppliers) => (
            <div
              key={suppliers.id}
              className={`${grid} items-center border-b border-gray-300 hover:bg-gray-100 px-6 py-3 last:border-b-0`}
            >
              <p className="font-medium">{suppliers.company}</p>
              <p className="font-medium">{suppliers.responsible}</p>
              <p className="font-medium">{suppliers.phone}</p>
              <p className="font-medium">{suppliers.city}</p>
              <div className="flex justify-start">
                <span
                  className={
                    suppliers.status
                      ? "rounded-xl text-emerald-700 bg-emerald-200 px-3 py-1"
                      : "rounded-xl text-gray-500 bg-gray-200 px-3 py-1"
                  }
                >
                  {suppliers.status ? "Ativo" : "Inativo"}
                </span>
              </div>
              <TableActions />
            </div>
          ))}
        </TableCard>
      )}

      <SuppliersModal
        open={openModalSuppliers}
        onClose={() => setOpenModalSuppliers(false)}
      ></SuppliersModal>
    </div>
  );
}
