import { Button } from "../ui/button";
import { states } from "../../data/states";
import React, { useState } from "react";
import { Label } from "../ui/label";

interface SuppliersFormProps {
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

  onAddSupplier: (supplier: {
    empresa: string;
    responsavel: string;
    documento: string;
    telefone: string;
    email: string;
    enderecoId: number;
    observacoes: string;
  }) => void;
}

export default function SuppliersForm({
  onCancel,
  onAddSupplier,
  onAddAddress,
}: SuppliersFormProps) {
  const [form, setForm] = useState({
    empresa: "",
    responsavel: "",
    documento: "",
    telefone: "",
    email: "",

    cep: "",
    estadoId: "",
    cidade: "",
    bairro: "",
    rua: "",
    numero: "",
    complemento: "",

    observacoes: "",
  });

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const enderecoId = onAddAddress({
      cep: form.cep,
      estadoId: form.estadoId,
      cidade: form.cidade,
      bairro: form.bairro,
      rua: form.rua,
      numero: form.numero,
      complemento: form.complemento,
    });

    onAddSupplier({
      empresa: form.empresa,
      responsavel: form.responsavel,
      documento: form.documento,
      telefone: form.telefone,
      email: form.email,
      enderecoId,
      observacoes: form.observacoes,
    });

    onCancel();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Empresa e responsável */}
      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <Label>Nome da empresa</Label>

          <input
            type="text"
            value={form.empresa}
            onChange={(e) => handleChange("empresa", e.target.value)}
            placeholder="Ex: Frigorífico Goiás LTDA"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Responsável</Label>

          <input
            type="text"
            value={form.responsavel}
            onChange={(e) => handleChange("responsavel", e.target.value)}
            placeholder="Ex: Carlos Menezes"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Documento e telefone */}
      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <Label>CNPJ</Label>

          <input
            type="text"
            value={form.documento}
            onChange={(e) => handleChange("documento", e.target.value)}
            placeholder="00.000.000/0001-00"
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

      {/* Email */}
      <div className="flex flex-col gap-2">
        <Label>Email</Label>

        <input
          type="email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="contato@empresa.com"
          className="border rounded-md p-2.5 border-gray-300 shadow-lg"
        />
      </div>

      {/* Endereço */}
      <section className="grid grid-cols-2 gap-2">
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
            className="border rounded-md p-2.5 border-gray-300 shadow-lg text-muted-foreground"
          >
            <option value="">Selecione</option>

            {states.map((state) => (
              <option key={state.id} value={state.nome}>
                {state.nome}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2">
          <Label>Cidade</Label>

          <input
            type="text"
            value={form.cidade}
            onChange={(e) => handleChange("cidade", e.target.value)}
            placeholder="Goiânia"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Bairro</Label>

          <input
            type="text"
            value={form.bairro}
            onChange={(e) => handleChange("bairro", e.target.value)}
            placeholder="Centro"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-2">
        <div className="flex flex-col gap-2">
          <Label>Rua</Label>

          <input
            type="text"
            value={form.rua}
            onChange={(e) => handleChange("rua", e.target.value)}
            placeholder="Rua Industrial"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Número</Label>

          <input
            type="text"
            value={form.numero}
            onChange={(e) => handleChange("numero", e.target.value)}
            placeholder="123"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Complemento</Label>

          <input
            type="text"
            value={form.complemento}
            onChange={(e) => handleChange("complemento", e.target.value)}
            placeholder="Sala 2"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Observações */}
      <div className="flex flex-col gap-2">
        <Label>Observações</Label>

        <textarea
          value={form.observacoes}
          onChange={(e) => handleChange("observacoes", e.target.value)}
          placeholder="Informações adicionais..."
          className="border rounded-md p-2.5 h-28 border-gray-300 shadow-lg"
        />
      </div>

      <div className="flex justify-end gap-3 pt-2">
        <Button
          type="button"
          variant="outline"
          className="py-5 px-6 font-bold font-serif"
          onClick={onCancel}
        >
          Cancelar
        </Button>

        <Button type="submit" className="py-5 px-6 font-bold font-serif">
          Salvar
        </Button>
      </div>
    </form>
  );
}
