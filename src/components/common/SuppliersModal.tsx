import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { IoMdClose } from "react-icons/io";
import SuppliersForm from "../forms/SuppliersForm";

interface SuppliersModalProps {
  open: boolean;

  onClose: () => void;
}

export default function SuppliersModal({ open, onClose }: SuppliersModalProps) {
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
          w-137.5
          max-h-[90vh]
          overflow-y-auto
        "
      >
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Novo Fornecedor</CardTitle>

            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <IoMdClose size={20} />
            </button>
          </div>

          <CardDescription>Preencha os dados do Fornecedor</CardDescription>
        </CardHeader>

        <CardContent>
          <SuppliersForm onCancel={onClose} />
        </CardContent>
      </Card>
    </div>
  );
}
