import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { IoMdClose } from "react-icons/io";

interface CategoryModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function CategoryModal({
  open,
  onClose,
  children,
}: CategoryModalProps) {
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
      <Card className="w-96">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>
              Nova Categoria
            </CardTitle>

            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-muted"
            >
              <IoMdClose size={20} />
            </button>
          </div>

          <CardDescription>
            Cadastre uma nova categoria
          </CardDescription>
        </CardHeader>

        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}