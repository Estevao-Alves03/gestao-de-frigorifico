import { GoPlus } from "react-icons/go";
import { Button } from "../../components/ui/button";
import { FaPencil } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";
import { Card, CardHeader, CardContent } from "../../components/ui/card";
import { suppliers } from "../../data/suppliers";
import { useState } from "react";
import SuppliersModal from "../../components/common/SuppliersModal";

export default function Suppliers() {
  
  const gridColumns = "grid grid-cols-[3fr_2fr_2fr_2fr_1.5fr_1fr]";

  const [openModalSuppliers, setOpenModalSuppliers] = useState(false)

  return (
    <div className="p-7 pt-8">
      {/* titulo */}
      <header className="flex items-center justify-between">
        <section>
          <h1 className="text-gray-900 font-medium text-xl font-sans">
            Fornecedores
          </h1>
          <p className="text-sm font-sans text-gray-600">
            Gerencie seus fornecedores e parceiros comerciais.
          </p>
        </section>

        <section>
          <Button 
          onClick={() => setOpenModalSuppliers(true)}
          className="text-sm items-center flex h-10 w-40">
            <GoPlus />
            Novo Fornecedor
          </Button>
        </section>
      </header>

      {/* conteudo */}
      <Card className="mt-8 border-gray-300">
        <CardHeader
          className={`${gridColumns} items-center border-b border-gray-300 pb-4 px-6`}
        >
          <h1 className="font-medium text-muted-foreground">Empresa</h1>

          <h1 className="font-medium text-muted-foreground">Responsável</h1>

          <h1 className="font-medium text-muted-foreground">Telefone</h1>

          <div className="flex justify-center">
            <h1 className="font-medium text-muted-foreground">Cidade</h1>
          </div>

          <div className="flex justify-center">
            <h1 className="font-medium text-muted-foreground">Status</h1>
          </div>

          <div className="flex justify-end">
            <h1 className="font-medium text-muted-foreground">Ações</h1>
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {suppliers.map((supplier) => (
            <div
              key={supplier.id}
              className={`${gridColumns} items-center border-b border-gray-300 px-6 py-3 hover:bg-gray-100 last:border-b-0`}
            >
              <p>{supplier.company}</p>

              <p>{supplier.responsible}</p>

              <p>{supplier.phone}</p>

              <div className="flex justify-center">
                <p>{supplier.city}</p>
              </div>

              <div className="flex justify-center">
                <span
                  className={
                    supplier.status
                      ? "rounded-lg border border-blue-300 bg-blue-200/65 px-2 py-0.5 text-blue-500 text-xs"
                      : "rounded-lg border border-gray-300 bg-gray-200/65 px-2 py-0.5 text-gray-500 text-xs"
                  }
                >
                  {supplier.status ? "Ativo" : "Inativo"}
                </span>
              </div>

              <div className="flex justify-end gap-2">
                <button
                  className="
              rounded-md
              p-2
              transition-colors
              hover:bg-gray-200
            "
                >
                  <FaPencil />
                </button>

                <button
                  className="
              rounded-md
              p-2
              transition-colors
              hover:bg-red-100
            "
                >
                  <IoTrashOutline className="text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      
      <SuppliersModal
      open={openModalSuppliers}
      onClose={() => setOpenModalSuppliers(false)}
      >        
      </SuppliersModal>
    </div>
  );
}
