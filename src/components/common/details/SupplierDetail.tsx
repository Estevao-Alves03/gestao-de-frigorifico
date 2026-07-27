import { addresses } from "../../../data/addresses";
import { suppliers } from "../../../data/suppliers";
import DetailsCard from "../DetailsCard";

interface SupplierDetailProps {
  address?: (typeof addresses)[number];
  supplier?: (typeof suppliers)[number];
  onClose: () => void;
}

export default function SupplierDetail({
  supplier,
  onClose,
  address,
}: SupplierDetailProps) {
  if (!supplier) return null;
  return (
    <DetailsCard
      title="Detalhes do Parceiro"
      description="Informações do fornecedor ou parceiro comercial"
      onClose={onClose}
    >
      <div className="space-y-3">
        {/* informaçoes gerais */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Informações Gerais
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Empresa</span>
              <span className="font-medium">{supplier.empresa}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Responsável</span>
              <span className="font-medium">{supplier.responsavel}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">CNPJ</span>
              <span className="font-medium">{supplier.documento}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Status</span>
              <div>
                <span
                  className={
                    supplier.status
                      ? "rounded-xl text-emerald-700 bg-emerald-200 px-3 py-1 inline-block"
                      : "rounded-xl text-gray-500 bg-gray-200 px-3 py-1 inline-block"
                  }
                >
                  {supplier.status ? "Ativo" : "Inativo"}
                </span>
              </div>
            </div>
          </div>
        </section>
        {/* contato */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Contato
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Telefone</span>
              <span className="font-medium">{supplier.telefone}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">E-mail</span>
              <span className="font-medium">{supplier.email}</span>
            </div>
          </div>
        </section>
        {/* endereço */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Endereço
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Cidade</span>
              <span className="font-medium">{address?.cidade}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Estado</span>
              <span className="font-medium">{address?.estadoId}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Rua</span>
              <span className="font-medium">{address?.rua}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Bairro</span>
              <span className="font-medium">{address?.bairro}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Número</span>
              <span className="font-medium">{address?.numero}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">CEP</span>
              <span className="font-medium">{address?.cep}</span>
            </div>
          </div>
          <div className="flex flex-col col-span-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Complemento</span>
              <span className="font-medium">{address?.complemento}</span>
            </div>
          </div>
        </section>
        {/* complemento */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Informações Adicionais
          </h1>

          <div className="flex flex-col col-span-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Observações</span>
              <span className="font-medium">{supplier.observacoes}</span>
            </div>
          </div>
        </section>
      </div>
    </DetailsCard>
  );
}
