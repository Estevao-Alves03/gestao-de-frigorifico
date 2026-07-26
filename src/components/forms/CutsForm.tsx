import { Button } from "../ui/button";
interface CutsFormProps {
  onCancel: () => void;
}

export default function CutsForm({ onCancel }: CutsFormProps) {
  return (
    <form className="space-y-5 mt-2">
      <div className="space-y-2">
        <input id="cuts" placeholder="Ex: Picanha" className="border border-gray-300 shadow-lg p-2.5 rounded-md w-full"/>
      </div>

      <div className="flex justify-end gap-2">
        <Button className="px-6 py-5 font-medium" type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>

        <Button className="px-6 py-5 font-medium" type="submit">Salvar</Button>
      </div>
    </form>
  );
}
