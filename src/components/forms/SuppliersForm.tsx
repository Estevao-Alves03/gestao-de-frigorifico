import { Button } from "../ui/button";
import { states } from "../../data/states";

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
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Nome do resposável</label>

          <input
            name="name"
            type="text"
            placeholder="Ex: Carlos Menezes"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <label>CNPJ </label>

          <input
            name="name"
            type="text"
            placeholder="00.000.000/0001-00"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Telefone</label>

          <input
            name="name"
            type="text"
            placeholder="(00) 00000-0000"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
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
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Cidade</label>

          <input
            name="name"
            type="text"
            placeholder="Ex: São Paulo"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>
      {/* Estado e endereço */}
      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <label>Estado</label>

          <select className="border rounded-md p-2.5 border-gray-300 shadow-lg">
            <option value="">Selecione</option>

            {states.map((state) => (
              <option value={state.id} key={state.id}>
                {state.name}
              </option>
            ))}

          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label>Endereço</label>

          <input
            name="name"
            type="text"
            placeholder="Rua, numero, bairro"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

     <section className="">
      <div className="flex flex-col gap-2">
        <label>Observações</label>
        <textarea 
        placeholder="Informações adicionais sobre este parceiro..."
        className="border rounded-md p-2.5 h-28 border-gray-300 shadow-lg"
        />
      </div>
     </section>

      {/* Botões */}
      <div className="flex justify-end gap-3 pt-2">
        <Button className="py-5 px-6 font-bold font-serif" type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>

        <Button className="py-5 px-6 font-bold font-serif" type="submit">Salvar</Button>
      </div>
    </form>
  );
}
