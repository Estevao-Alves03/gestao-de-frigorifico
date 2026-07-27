import { ReactNode } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { IoMdClose } from "react-icons/io";

interface DetailsCardProps {
  title: string;
  description: string;
  //   headers: ReactNode[];
  children: ReactNode;
  onClose: () => void;
}

export default function DetailsCard({
  title,
  description,
  children,
  onClose
}: DetailsCardProps) {
  return (
    <div className="z-50 inset-0 fixed flex items-center justify-center bg-black/40 p4">
      <Card className="w-140 border-gray-400 shadow-xl border py-5">
        <CardHeader className="px-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-bold font-serif">
              {title}
            </CardTitle>
            <button
              onClick={onClose}
              className="p-1 rounded-md hover:bg-gray-100 cursor-pointer"
            >
              <IoMdClose size={20} />
            </button>
          </div>
          <CardDescription className="text-lg font-serif">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="max-h-[80vh] overflow-y-auto pr-2">
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
