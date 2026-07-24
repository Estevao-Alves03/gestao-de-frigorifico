import { Button } from "../ui/button";
import { Input } from "../ui/input";


interface CutsFormProps {
    onCancel: () => void;
}

export default function CutsForm({ onCancel }: CutsFormProps) {
  return (
    <form
      className="space-y-5 mt-4"
    >
      <div className="space-y-2">
               <Input
          id="cuts"
          placeholder="Ex: Picanha"
        />
      </div>

      <div className="flex justify-end gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancelar
        </Button>

        <Button type="submit">
          Salvar
        </Button>
      </div>
    </form>
  );
}