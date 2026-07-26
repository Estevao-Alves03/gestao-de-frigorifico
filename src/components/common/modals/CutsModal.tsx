import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../ui/card";


interface CutsModelProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

export default function ({ open, onClose, children }: CutsModelProps) {
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
      <Card className="w-120 border-gray-400 shadow-xl border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-xl font-serif font-bold">Novo Corte</CardTitle>

            <button onClick={onClose} className="p-1 rounded-md hover:bg-muted">
              <IoMdClose size={20} />
            </button>
          </div>

          <CardDescription className="text-lg font-serif">Cadastre um novo corte</CardDescription>
        </CardHeader>

        <CardContent>{children}</CardContent>
      </Card>
    </div>
  );
}
