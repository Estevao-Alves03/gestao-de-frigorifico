import { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
} from "../ui/card";

interface TableCardProps {
  gridColumns: string;
  headers: ReactNode[];
  children: ReactNode;
}

export default function TableCard({
  gridColumns,
  headers,
  children,
}: TableCardProps) {
  return (
    <Card className="mt-8 bg-white/40 backdrop:blur-md border-gray-300 shadow-lg border">
      <CardHeader
      className={`${gridColumns} items-center border-b border-gray-300 px-6 pb-4`}
      >
        {headers.map((header, index) => (
            <h1 
            key={index}
            className="font-medium text-muted-foreground"
            >
            {header}
            </h1>
        ))}
      </CardHeader>
      <CardContent className="p-0">
        {children} 
      </CardContent>
    </Card>
  );
}
