import { products } from "../../../data/products";
import DetailsCard from "../DetailsCard";

interface ProductDetailProps {
  product?: (typeof products)[number];
  onClose: () => void;
}

export default function ProductDetail({
  onClose,
  product,
}: ProductDetailProps) {
  if (!product) return null;

  return (
    <DetailsCard
      title="Detalhes do Produto"
      description="Informações do item de estoque"
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
                <span className="text-sm text-gray-500">Nome Registrado</span>
                <span className="font-medium">{product.nomeProduto}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Fornecedor</span>
                <span className="font-medium">{product.fornecedorId}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Categoria</span>
                <span className="font-medium">{product.categoriaId}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Corte</span>
                <span className="font-medium">{product.corteId}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Lote</span>
                <span className="font-medium">{product.lote}</span>
            </div>
          </div>
        </section>
        {/* datas */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Datas
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Entrada</span>
                <span className="font-medium">{product.dataEntrada}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Validade</span>
                <span className="font-medium">{product.dataValidade}</span>
            </div>
          </div>
        </section>
        {/* valores */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Valores
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Compra</span>
                <span className="font-medium">R$ {product.precoCompra}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Venda</span>
                <span className="font-medium">R$ {product.precoVenda}</span>
            </div>
          </div>
        </section>
        {/* estoque */}
        <section className="rounded-lg border p-5 shadow-lg border-gray-300">
          <h1 className="flex items-center gap-2 text-lg font-medium font-serif mb-2">
            Estoque
          </h1>

          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Peso</span>
                <span className="font-medium">R$ {product.peso}</span>
            </div>
            <div className="flex flex-col">
                <span className="text-sm text-gray-500">Quantidade</span>
                <span className="font-medium">R$ {product.quantidade}</span>
            </div>
          </div>
        </section>
      </div>
    </DetailsCard>
  );
}
