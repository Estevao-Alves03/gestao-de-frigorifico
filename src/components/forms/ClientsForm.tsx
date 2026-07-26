import { useState } from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";

interface ClientsFormProps {
  onCancel: () => void;
}

export default function ClientsForm({ onCancel }: ClientsFormProps) {
  const [personaType, setPersonaType] = useState<"pf" | "pj">("pf");

  return (
    <form className="space-y-7">
      {/* tipo de pessoa */}
      <section className="flex flex-col gap-4">
        <Label>Tipo de pessoa</Label>

        <RadioGroup
          value={personaType}
          onValueChange={(value) => setPersonaType(value as "pf" | "pj")}
          className="grid grid-cols-3 gap-2"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="pf" className="border border-gray-400" />
            <Label htmlFor="pf">Pessoa Fisica</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="pj" className="border border-gray-400" />
            <Label htmlFor="pj">Pessoa Jurídica</Label>
          </div>
        </RadioGroup>
      </section>

      {/* nome completo e telefone */}
      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <Label>Nome completo</Label>
          <input
            type="text"
            placeholder="Ex: Lucas Carvalho da Silva"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Telefone</Label>
          <input
            type="text"
            placeholder="(00) 00000-0000"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* CPF/CNPJ e cidade */}
      <section className="grid grid-cols-2 gap-2">
        {personaType === "pf" ? (
          <div className="flex flex-col gap-2">
            <Label>CPF</Label>
            <input
              type="text"
              placeholder="000.000.000-00"
              className="border rounded-md p-2.5 border-gray-300 shadow-lg"
            />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <Label>CNPJ</Label>
            <input
              type="text"
              placeholder="00.000.000/0000-00"
              className="border rounded-md p-2.5 border-gray-300 shadow-lg"
            />
          </div>
        )}
        {/* cidade */}
        <div className="flex flex-col gap-2">
          <Label>Cidade</Label>
          <input
            type="text"
            placeholder="Ex: São Paulo"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      <section className="flex justify-end gap-3 mt-4">
        <Button className="py-5 px-6 font-bold font-serif" type="button" variant={"outline"} onClick={onCancel}>
          Cancelar
        </Button>
        <Button className="py-5 px-6 font-bold font-serif">Salvar</Button>
      </section>
    </form>
  );
}
