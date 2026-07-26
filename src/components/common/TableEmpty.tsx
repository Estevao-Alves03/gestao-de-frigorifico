import { Card, CardContent } from "../ui/card";

interface TableEmptyProps {
  title: string;
  description: string;
}

export default function TableEmpty({ title, description }: TableEmptyProps) {
  return (
    <div>
      <Card className="mt-8 bg-white/90 backdrop:blur-md border shadow-lg">
        <CardContent className="text-center justify-center flex p-20">
          <div className="space-y-2">
            <h1 className="font-bold text-xl font-serif">{title}</h1>
            <h3 className="font-medium text-lg font-serif">{description}</h3>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
