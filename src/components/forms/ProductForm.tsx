import { Button } from "../ui/button";
import { categories } from "../../data/categories";
import { cuts } from "../../data/cuts";
import { suppliers } from "../../data/suppliers";
import { Label } from "../ui/label";

interface ProductFormProps {
  onCancel: () => void;
}

export default function ProductForm({ onCancel }: ProductFormProps) {
  return (
    <form className="space-y-4">
      {/* Nome */}
      <div className="flex flex-col gap-2">
        <Label>Nome</Label>

        <input
          name="name"
          type="text"
          placeholder="Ex: Contra-Filé"
          className="border rounded-md p-2.5 border-gray-300 shadow-lg"
        />
      </div>

      {/* Categoria e Corte */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Categoria</Label>

          <select name="category" className="border rounded-md p-2.5 border-gray-300 shadow-lg">
            <option value="">Selecione</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Corte</Label>

          <select name="cut" className="border rounded-md p-2.5 border-gray-300 shadow-lg">
            <option value="">Selecione</option>

            {cuts.map((cut) => (
              <option key={cut.id} value={cut.id}>
                {cut.nome}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Fornecedor e lote */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Fornecedor</Label>

          <select name="supplier" className="border rounded-md p-2.5 border-gray-300 shadow-lg">
            <option value="">Selecione</option>

            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.company}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <Label>NF - Lote</Label>

          <input
            name="batch"
            type="text"
            placeholder="Lote - 20260723-01"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Datas */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Data de entrada</Label>

          <input
            name="entry_date"
            type="date"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Validade</Label>

          <input
            name="expiration_date"
            type="date"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Peso e quantidade */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Peso (kg)</Label>

          <input
            name="weight"
            type="number"
            placeholder="0"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Quantidade</Label>

          <input
            name="quantity"
            type="number"
            placeholder="0"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Preços */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Preço de compra</Label>

          <input
            name="purchase_price"
            type="number"
            step="0.01"
            placeholder="R$ 0,00"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Preço de venda</Label>

          <input
            name="sale_price"
            type="number"
            step="0.01"
            placeholder="R$ 0,00"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Botões */}
      <div className="flex justify-end gap-3 pt-4 ">
        <Button className="py-5 px-6 font-bold font-serif cursor-pointer" type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>

        <Button className="py-5 px-6 font-bold font-serif cursor-pointer" type="submit">Salvar</Button>
      </div>
    </form>
  );
}
