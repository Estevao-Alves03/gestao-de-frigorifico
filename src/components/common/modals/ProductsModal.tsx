import { IoMdClose } from "react-icons/io";
import ProductForm from "../../forms/ProductForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../ui/card";

interface ProductModalProps {
  open: boolean;
  onClose: () => void;
  onAddProduct: (product: {
    nomeProduto:string,
    lote:string,
    categoriaId: number,
    corteId: number,
    fornecedorId: number,
    dataEntrada: string,
    dataValidade: string,
    peso: number,
    quantidade: number,
    precoCompra: number,
    precoVenda: number
  }) => void;
}

export default function ProductModal({ open, onClose, onAddProduct }: ProductModalProps) {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/40
        p-4
      "
    >
      <Card
        className="
          w-230
          max-h-[90vh]
          overflow-y-auto
        border-gray-400 shadow-xl border
        "
      >
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-bold font-serif">Novo Produto</CardTitle>

            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <IoMdClose size={20} />
            </button>
          </div>

          <CardDescription className="text-lg font-serif">Preencha os dados do produto</CardDescription>
        </CardHeader>

        <CardContent>
          <ProductForm onCancel={onClose} onAddProduct={onAddProduct} />
        </CardContent>
      </Card>
    </div>
  );
}
