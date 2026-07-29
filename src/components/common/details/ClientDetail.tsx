import { addresses } from "../../../data/addresses";
import { clients } from "../../../data/clients";
import DetailsCard from "../DetailsCard";

interface ClientDetailProps {
  client?: (typeof clients)[number];
  address?: (typeof addresses)[number]
  onClose: () => void;
}

export default function ClientDetail({ client, onClose, address }: ClientDetailProps) {
  if (!client) return null;
  return (
    <DetailsCard
      title="Detalhes do Cliente"
      description="Informações completas e detalhadas do cliente"
      onClose={onClose}
    >
      <div className="space-y-3">
        {/* informaçoes pessoais */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Informações Pessoais
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Nome</span>
              <span className="font-medium">{client.nome}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Tipo (PF/PJ)</span>
              <span className="font-medium">{client.tipo}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">CPF/CNPJ</span>
              <span className="font-medium">{client.documento}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Data de nascimento</span>
              <span className="font-medium">{client.dataNascimento}</span>
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
              <span className="font-medium">{client.telefone}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">E-mail</span>
              <span className="font-medium truncate">{client.email}</span>
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
      </div>
    </DetailsCard>
  );
}
