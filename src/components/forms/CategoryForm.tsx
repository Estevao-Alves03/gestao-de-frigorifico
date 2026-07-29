import { Button } from "../ui/button";
import { useCategoryStore } from "../../store/categoryStore";
import { useState } from "react";
interface CategoryFormProps {
  onCancel: () => void;
}

export default function CategoryForm({ onCancel }: CategoryFormProps) {
  const { categories, removeCategory } = useCategoryStore();
  const [name, setName] = useState("");

  const addCategory = useCategoryStore((state) => state.addCategory);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newCategory = {
      id: Date.now(),
      name,
    };
    console.log(newCategory);
    addCategory(newCategory);

    setName("");
  }

  return (
    <form className="space-y-5 mt-2" onSubmit={handleSubmit}>
      <div className="space-y-2">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="category"
          placeholder="Ex: Bovinos"
          className="w-full border rounded-md p-2.5 border-gray-300 shadow-lg"
        />
      </div>

      {categories.length > 0 && (
        <div className="flex gap-4">
          {categories.map((category) => (
            <div key={category.id} onClick={() => removeCategory(category.id)}>
              {category.name}
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-end gap-2">
        <Button
          className="px-6 py-5 font-medium"
          type="button"
          variant="outline"
          onClick={onCancel}
        >
          Cancelar
        </Button>

        <Button className="px-6 py-5 font-medium" type="submit">
          Salvar
        </Button>
      </div>
    </form>
  );
}
