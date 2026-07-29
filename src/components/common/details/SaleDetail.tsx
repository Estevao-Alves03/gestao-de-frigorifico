import { addresses } from "../../../data/addresses";
import { clients } from "../../../data/clients";
import { sales } from "../../../data/sales";
import { saleItems } from "../../../data/saleItems";
import { products } from "../../../data/products";
import DetailsCard from "../DetailsCard";

interface SaleDetailProps {
  sale?: (typeof sales)[number];
  address?: (typeof addresses)[number];
  client?: (typeof clients)[number];
  onClose: () => void;
}

export default function SaleDetail({
  sale,
  address,
  client,
  onClose,
}: SaleDetailProps) {
  if (!sale || !client) return null;

  const produtosDaVenda = saleItems.filter((item) => item.vendaId === sale.id);

  return (
    <DetailsCard
      title="Detalhes da Venda"
      description="Informações completas e detalhadas da venda"
      onClose={onClose}
    >
      <div className="space-y-3">
        {/* identificaçao da venda */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Identificação da Venda
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Nf</span>
              <span className="font-medium">{sale.numeroVenda}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Data</span>
              <span className="font-medium">{sale.data}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Cliente</span>
              <span className="font-medium">{client.nome}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Quantidade de itens</span>
              <span className="font-medium">{sale.quantidadeItens} Un</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Valor total</span>
              <span className="font-medium">R$ {sale.total.toFixed(2)}</span>
            </div>
          </div>
        </section>
        {/* pagamento */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Pagamento
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Forma de pagamento</span>
              <span className="font-medium">{sale.pagamento}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Desconto</span>
              <span className="font-medium">R$ {sale.desconto.toFixed(2)}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Valor final</span>
              <span className="font-medium">
                R$ {sale.valorFinal.toFixed(2)}
              </span>
            </div>
          </div>
        </section>
        {/* produtos */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Produtos
          </h1>

          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 border-b pb-1">
            <span className="text-sm text-gray-500 font-medium">Produto</span>
            <span className="text-sm text-gray-500 font-medium">
              Quantidade
            </span>
            <span className="text-sm text-gray-500 font-medium">
              Valor Unitário
            </span>
            <span className="text-sm text-gray-500 font-medium">Total</span>
          </div>

          {produtosDaVenda.map((item) => {
            const produto = products.find(
              (product) => product.id === item.produtoId,
            );

            return (
              <div
                key={item.id}
                className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-2 pt-2 border-b last:border-b-0 py-2"
              >
                <span className="font-medium">{produto?.nomeProduto}</span>
                <span className="font-medium">{item.quantidade} Un</span>
                <span className="font-medium">R$ {item.valorUnitario}</span>
                <span className="font-medium">R$ {item.total.toFixed(2)}</span>
              </div>
            );
          })}
        </section>
        {/* cliente */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Cliente
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="font-medium">Nome</span>
              <span className="font-medium">{client.nome}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">CPF/CNPJ</span>
              <span className="font-medium">{client.documento}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">RG</span>
              <span className="font-medium">{client.rg}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Data de nascimento</span>
              <span className="font-medium">{client.dataNascimento}</span>
            </div>
          </div>
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
