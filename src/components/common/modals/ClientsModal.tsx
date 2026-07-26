import { IoMdClose } from "react-icons/io";
import ClientsForm from "../../forms/ClientsForm";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../ui/card";


interface ClientsModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ClientsModal({ open, onClose }: ClientsModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-black/40 z-50">
      <Card className="w-230 max-h-[90] overflow-y-auto border-gray-400 shadow-xl border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="font-bold text-xl font-serif">Novo Cliente</CardTitle>
            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100"
            >
              <IoMdClose size={20} />
            </button>
          </div>
          <CardDescription className="text-lg font-serif">Preencha os dados do cliente </CardDescription>
        </CardHeader>
        <CardContent>
          <ClientsForm onCancel={onClose} />
        </CardContent>
      </Card>
    </div>
  );
}
