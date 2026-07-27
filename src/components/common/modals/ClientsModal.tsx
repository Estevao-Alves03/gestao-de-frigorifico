import { IoMdClose } from "react-icons/io";
import ClientsForm from "../../forms/ClientsForm";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../ui/card";
import { Client } from "../../../types/Client";

interface ClientsModalProps {
  open: boolean;
  onClose: () => void;


  onAddAddress: (address: {
    cep: string;
    estadoId: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
  }) => number;

  onAddClient: (client: Omit<Client, "id">) => void;
}

export default function ClientsModal({
  open,
  onClose,
  onAddClient,
  onAddAddress,
}: ClientsModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/40 z-50">
      <Card className="w-230 max-h-[90vh] overflow-y-auto border-gray-400 shadow-xl border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="font-bold text-xl font-serif">
              Novo Cliente
            </CardTitle>

            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <IoMdClose size={20} />
            </button>
          </div>

          <CardDescription className="text-lg font-serif">
            Preencha os dados do cliente
          </CardDescription>
        </CardHeader>

        <CardContent>
          <ClientsForm
            onCancel={onClose}
            onAddClient={onAddClient}
            onAddAddress={onAddAddress}
          />
        </CardContent>
      </Card>
    </div>
  );
}