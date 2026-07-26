import { IoMdClose } from "react-icons/io";
import SuppliersForm from "../../forms/SuppliersForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";

interface SuppliersModalProps {
  open:boolean;
  onClose:()=>void;

  onAddSupplier:(supplier:{
    empresa:string;
    responsavel:string;
    documento:string;
    telefone:string;
    email:string;
    enderecoId:number;
    observacoes:string;
  })=>void;

  onAddAddress:(address:{
    cep:string;
    estadoId:string;
    cidade:string;
    bairro:string;
    rua:string;
    numero:string;
    complemento:string;
  })=>number;
}

export default function SuppliersModal({ open, onClose, onAddSupplier, onAddAddress }: SuppliersModalProps) {
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
            <CardTitle className="font-bold text-xl font-serif">Novo Fornecedor</CardTitle>

            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <IoMdClose size={20} />
            </button>
          </div>

          <CardDescription className="text-lg font-serif">Preencha os dados do Fornecedor</CardDescription>
        </CardHeader>

        <CardContent>
          <SuppliersForm onCancel={onClose} onAddSupplier={onAddSupplier}  onAddAddress={onAddAddress}/>
        </CardContent>
      </Card>
    </div>
  );
}
