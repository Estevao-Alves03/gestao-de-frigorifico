import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface CategoryFormProps {
  onCancel: () => void;
}

export default function CategoryForm({ onCancel }: CategoryFormProps) {

  return (
    <form
      className="space-y-5 mt-4"
    >
      <div className="space-y-2">
               <Input
          id="category"
          placeholder="Ex: Bovinos"
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