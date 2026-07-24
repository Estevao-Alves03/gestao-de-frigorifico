import { Button } from "../ui/button";
import { categories } from "../../data/categories";
import { cuts } from "../../data/cuts";
import { suppliers } from "../../data/suppliers";

interface ProductFormProps {
  onCancel: () => void;
}

export default function ProductForm({ onCancel }: ProductFormProps) {
  return (
    <form className="space-y-4">
      {/* Nome */}
      <div className="flex flex-col gap-2">
        <label>Nome</label>

        <input
          name="name"
          type="text"
          placeholder="Ex: Contra-Filé"
          className="border rounded-md p-2"
        />
      </div>

      {/* Categoria e Corte */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label>Categoria</label>

          <select name="category" className="border rounded-md p-2">
            <option value="">Selecione</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label>Corte</label>

          <select name="cut" className="border rounded-md p-2">
            <option value="">Selecione</option>

            {cuts.map((cut) => (
              <option key={cut.id} value={cut.id}>
                {cut.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Fornecedor e lote */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label>Fornecedor</label>

          <select name="supplier" className="border rounded-md p-2">
            <option value="">Selecione</option>

            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label>Lote</label>

          <input
            name="batch"
            type="text"
            placeholder="Lote - 20260723-01"
            className="border rounded-md p-2"
          />
        </div>
      </section>

      {/* Datas */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label>Data de entrada</label>

          <input
            name="entry_date"
            type="date"
            className="border rounded-md p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Validade</label>

          <input
            name="expiration_date"
            type="date"
            className="border rounded-md p-2"
          />
        </div>
      </section>

      {/* Peso e quantidade */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label>Peso (kg)</label>

          <input
            name="weight"
            type="number"
            placeholder="0"
            className="border rounded-md p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Quantidade</label>

          <input
            name="quantity"
            type="number"
            placeholder="0"
            className="border rounded-md p-2"
          />
        </div>
      </section>

      {/* Preços */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <label>Preço de compra</label>

          <input
            name="purchase_price"
            type="number"
            step="0.01"
            placeholder="R$ 0,00"
            className="border rounded-md p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Preço de venda</label>

          <input
            name="sale_price"
            type="number"
            step="0.01"
            placeholder="R$ 0,00"
            className="border rounded-md p-2"
          />
        </div>
      </section>

      {/* Botões */}
      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>

        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}
