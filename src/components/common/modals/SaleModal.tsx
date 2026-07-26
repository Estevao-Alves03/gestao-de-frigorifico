import { IoMdClose } from "react-icons/io";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";
import SalesForm from "../../forms/Sale/SalesForm";
import SaleSummary from "../../forms/Sale/SaleSummary";

interface SaleModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SaleModal({ open, onClose }: SaleModalProps) {
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
          w-300
          max-h-[90vh]
          overflow-y-auto
          border-gray-400 shadow-xl border
        "
      >
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="font-bold text-xl font-serif">
              Novo Venda
            </CardTitle>

            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <IoMdClose size={20} />
            </button>
          </div>

          <CardDescription className="text-lg font-serif">
            Registre os produtos e dados do cliente.
          </CardDescription>
        </CardHeader>

        <CardContent className="h-[70vh]">
          <div className="grid grid-cols-[2fr_1fr] h-full">
            {/* esquerda */}
            <div className="overflow-y-auto pr-6">
              <SalesForm onCancel={onClose} />
            </div>
            {/* direita */}
            <div className="border-l px-7">
              <SaleSummary />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
