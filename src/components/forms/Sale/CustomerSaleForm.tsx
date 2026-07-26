import { useState } from "react";
import { CardContent } from "../../ui/card";
import { Switch } from "../../ui/switch";
import { states } from "../../../data/states";
import { Label } from "../../ui/label";

export default function CustomerSaleForm() {
  const [emitirNf, setEmitirNf] = useState(false);

  return (
    <div className="mt-6">
      <h1 className="font-medium text-lg font-serif pb-4">SEÇÃO 2 - DADOS DO CLIENTE</h1>
      <form className="space-y-4">
        <section className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <Label htmlFor="">Nome <h1 className="text-red-600 font-bold text-lg">*</h1></Label>
            <input
              type="text"
              placeholder="Nome completo"
              className="border rounded-md p-2 shadow-lg border-gray-300"
            />
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="">CPF <h1 className="text-red-600 font-bold text-lg">*</h1></Label>
            <input
              type="text"
              placeholder="000.000.000-00"
              className="border rounded-md p-2 shadow-lg border-gray-300"
            />
          </div>
        </section>
        <section className="flex items-center gap-2">
          <div className="border px-6 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200/90 border-gray-300 shadow-xl">
            <Switch
              checked={emitirNf}
              onCheckedChange={setEmitirNf}
              className="cursor-pointer"
            />{" "}
            Emitir Nota Fiscal
          </div>
        </section>

        {emitirNf && (
          <CardContent className="p-4 rounded-md pb-8 border-gray-300 shadow-xl border">
            <form className="space-y-4">
              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">RG</Label>
                  <input
                    type="text"
                    placeholder="00.000.000-0"
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">Data de nascimento</Label>
                  <input
                    type="date"
                    placeholder=""
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>
              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">Email</Label>
                  <input
                    type="email"
                    placeholder="cliente@email.com"
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">Telefone</Label>
                  <input
                    type="text"
                    placeholder="(00) 00000-0000"
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>
              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">CEP</Label>
                  <input
                    type="text"
                    placeholder="00000-000"
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">Estado</Label>
                  <select className="rounded-md p-2 border shadow-lg border-gray-300">
                    <option value="">Selecione</option>

                    {states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>
              </section>
              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">Cidade</Label>
                  <input
                    type="text"
                    placeholder="Ex: São Paulo"
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">Bairro</Label>
                  <input
                    type="text"
                    placeholder="Ex: Centro"
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>
              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">Rua</Label>
                  <input
                    type="text"
                    placeholder="Ex: Av. Paulista"
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">Número</Label>
                  <input
                    type="text"
                    placeholder="Ex: 1000"
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>
              <section className="">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="">Complento</Label>
                  <input
                    type="text"
                    placeholder="Apto, bloco, etc."
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>
            </form>
          </CardContent>
        )}
      </form>
    </div>
  );
}
