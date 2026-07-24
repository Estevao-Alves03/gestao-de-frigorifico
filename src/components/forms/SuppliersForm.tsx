import { Button } from "../ui/button";
import { categories } from "../../data/categories";
import { cuts } from "../../data/cuts";
import { suppliers } from "../../data/suppliers";

interface SuppliersFormProps {
  onCancel: () => void;
}

export default function SuppliersForm({ onCancel }: SuppliersFormProps) {
  return (
    <form className="space-y-4">
      {/* Nomes */}
      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <label>Nome da empresa</label>

          <input
            name="name"
            type="text"
            placeholder="Ex: TechSupply Ltda"
            className="border rounded-md p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Nome do resposável</label>

          <input
            name="name"
            type="text"
            placeholder="Ex: Carlos Menezes"
            className="border rounded-md p-2"
          />
        </div>
      </section>

      {/* CPF e telefone */}
      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <label>CPF / CNPJ </label>

          <input
            name="name"
            type="text"
            placeholder="00.000.000/0001-00"
            className="border rounded-md p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Telefone</label>

          <input
            name="name"
            type="text"
            placeholder="(00) 00000-0000"
            className="border rounded-md p-2"
          />
        </div>
      </section>

      {/* Email e cidade */}
      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <label>Email </label>

          <input
            name="name"
            type="text"
            placeholder="contato@empresa.com"
            className="border rounded-md p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Cidade</label>

          <input
            name="name"
            type="text"
            placeholder="Ex: São Paulo"
            className="border rounded-md p-2"
          />
        </div>
      </section>
      {/* Estado e endereço */}
      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <label>Estado</label>

         <select className="rounded-md border p-2">
          <option value="">GO</option>
          <option value="">SP</option>
          <option value="">RJ</option>
         </select>
        </div>

        <div className="flex flex-col gap-2">
          <label>Endereço</label>

          <input
            name="name"
            type="text"
            placeholder="Rua, numero, bairro"
            className="border rounded-md p-2"
          />
        </div>
      </section>

     <section className="">
      <div className="flex flex-col gap-2">
        <label>Observações</label>
        <textarea 
        placeholder="Informações adicionais sobre este parceiro..."
        className="border rounded-md p-2 h-28"
        />
      </div>
     </section>

      {/* Botões */}
      <div className="flex justify-end gap-3 pt-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>

        <Button type="submit">Salvar</Button>
      </div>
    </form>
  );
}
