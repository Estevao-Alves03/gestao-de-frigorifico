import React, { useState } from "react";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { states } from "../../data/states";

interface ClientsFormProps {
  onCancel: () => void;

  onAddAddress: (address: {
    cep: string;
    estadoId: string;
    cidade: string;
    bairro: string;
    rua: string;
    numero: string;
    complemento: string;
  }) => number;

  onAddClient: (client: {
    nome: string;
    tipo: string;
    documento: string;
    rg: string;
    dataNascimento: string;
    email: string;
    telefone: string;
    enderecoId: number;
  }) => void;
}

export default function ClientsForm({
  onCancel,
  onAddClient,
  onAddAddress,
}: ClientsFormProps) {
  const [personaType, setPersonaType] = useState<"pf" | "pj">("pf");

  const [form, setForm] = useState({
    nome: "",
    documento: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    rg: "",

    cep: "",
    estadoId: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submit");

    // cria endereço primeiro
    const enderecoId = onAddAddress({
      cep: form.cep,
      estadoId: form.estadoId,
      cidade: form.cidade,
      bairro: form.bairro,
      rua: form.rua,
      numero: form.numero,
      complemento: form.complemento,
    });

    // cria cliente com referência do endereço
    onAddClient({
      nome: form.nome,
      rg: form.rg,
      tipo: personaType.toUpperCase(),
      documento: form.documento,
      dataNascimento: form.dataNascimento,
      email: form.email,
      telefone: form.telefone,
      enderecoId,
    });

    onCancel();
  };

  return (
    <form className="space-y-4 overflow-y-auto" onSubmit={handleSubmit}>
      {/* Tipo de pessoa */}
      <section className="flex flex-col gap-4">
        <Label>Tipo de pessoa</Label>

        <RadioGroup
          value={personaType}
          onValueChange={(value) => setPersonaType(value as "pf" | "pj")}
          className="grid grid-cols-2 gap-2"
        >
          <div className="flex items-center gap-2">
            <RadioGroupItem value="pf" className="border border-gray-400" />
            <Label>Pessoa Física</Label>
          </div>

          <div className="flex items-center gap-2">
            <RadioGroupItem value="pj" className="border border-gray-400" />
            <Label>Pessoa Jurídica</Label>
          </div>
        </RadioGroup>
      </section>

      {/* Nome e telefone */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Nome completo</Label>

          <input
            type="text"
            value={form.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
            placeholder="Ex: Lucas Carvalho"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Telefone</Label>

          <input
            type="text"
            value={form.telefone}
            onChange={(e) => handleChange("telefone", e.target.value)}
            placeholder="(00) 00000-0000"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Documento e nascimento */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>{personaType === "pf" ? "CPF" : "CNPJ"}</Label>

          <input
            type="text"
            value={form.documento}
            onChange={(e) => handleChange("documento", e.target.value)}
            placeholder={
              personaType === "pf" ? "000.000.000-00" : "00.000.000/0000-00"
            }
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Data de nascimento</Label>

          <input
            type="date"
            value={form.dataNascimento}
            onChange={(e) => handleChange("dataNascimento", e.target.value)}
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label>Email</Label>

        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="email@email.com"
          className="border rounded-md p-2.5 border-gray-300 shadow-lg"
        />
      </div>

      {/* Endereço */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>CEP</Label>

          <input
            type="text"
            value={form.cep}
            onChange={(e) => handleChange("cep", e.target.value)}
            placeholder="74000-000"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Estado</Label>

          <select
            value={form.estadoId}
            onChange={(e) => handleChange("estadoId", e.target.value)}
            className="border border-gray-300 shadow-lg p-2.5 rounded-md"
          >
            <option value="">Selecione</option>

            {states.map((state) => (
              <option value={state.id} key={state.id}>
                {state.nome}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Cidade</Label>

          <input
            type="text"
            value={form.cidade}
            onChange={(e) => handleChange("cidade", e.target.value)}
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Bairro</Label>

          <input
            type="text"
            value={form.bairro}
            onChange={(e) => handleChange("bairro", e.target.value)}
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        <div className="flex flex-col gap-2 col-span-2">
          <Label>Rua</Label>

          <input
            type="text"
            value={form.rua}
            onChange={(e) => handleChange("rua", e.target.value)}
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Número</Label>

          <input
            type="text"
            value={form.numero}
            onChange={(e) => handleChange("numero", e.target.value)}
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      <div className="flex flex-col gap-2">
        <Label>Complemento</Label>

        <input
          type="text"
          value={form.complemento}
          onChange={(e) => handleChange("complemento", e.target.value)}
          placeholder="Casa, apartamento..."
          className="border rounded-md p-2.5 border-gray-300 shadow-lg"
        />
      </div>

      {/* Botões */}
      <section className="flex justify-end gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          className="py-5 px-6 font-bold font-serif"
        >
          Cancelar
        </Button>

        <Button type="submit" className="py-5 px-6 font-bold font-serif">
          Salvar
        </Button>
      </section>
    </form>
  );
}
