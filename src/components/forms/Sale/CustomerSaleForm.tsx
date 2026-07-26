import { useState } from "react";
import { CardContent } from "../../ui/card";
import { Switch } from "../../ui/switch";
import { states } from "../../../data/states";
import { Label } from "../../ui/label";
import {
  ClientSale,
  AddressSale,
} from "./SalesForm";

interface CustomerSaleFormProps {
  client: ClientSale;
  setClient: React.Dispatch<React.SetStateAction<ClientSale>>;

  address: AddressSale;
  setAddress: React.Dispatch<React.SetStateAction<AddressSale>>;
}

export default function CustomerSaleForm({
  client,
  setClient,
  address,
  setAddress,
}: CustomerSaleFormProps) {
  const [emitirNf, setEmitirNf] = useState(false);

  return (
    <div className="mt-6">
      <h1 className="font-medium text-lg font-serif pb-4">
        SEÇÃO 2 - DADOS DO CLIENTE
      </h1>

      <div className="space-y-4">
        {/* Nome */}
        <section>
          <div className="flex flex-col gap-1">
            <Label>Nome</Label>
            <input
              type="text"
              placeholder="Nome completo"
              value={client.nome}
              onChange={(e) =>
                setClient((prev) => ({
                  ...prev,
                  nome: e.target.value,
                }))
              }
              className="border rounded-md p-2 shadow-lg border-gray-300"
            />
          </div>
        </section>

        <section className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <Label>CPF</Label>
            <input
              type="text"
              placeholder="000.000.000-00"
              value={client.documento}
              onChange={(e) =>
                setClient((prev) => ({
                  ...prev,
                  documento: e.target.value,
                }))
              }
              className="border rounded-md p-2 shadow-lg border-gray-300"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label>Telefone</Label>
            <input
              type="text"
              placeholder="(00) 00000-0000"
              value={client.telefone}
              onChange={(e) =>
                setClient((prev) => ({
                  ...prev,
                  telefone: e.target.value,
                }))
              }
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
            />
            Emitir Nota Fiscal
          </div>
        </section>

        {emitirNf && (
          <CardContent className="p-4 rounded-md pb-8 border-gray-300 shadow-xl border">
            <div className="space-y-4">
              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label>Documento RG</Label>
                  <input
                    type="text"
                    value={client.rg}
                    onChange={(e) =>
                      setClient((prev) => ({
                        ...prev,
                        rg: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Data de nascimento</Label>
                  <input
                    type="date"
                    value={client.dataNascimento}
                    onChange={(e) =>
                      setClient((prev) => ({
                        ...prev,
                        dataNascimento: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>

              <section>
                <div className="flex flex-col gap-2">
                  <Label>Email</Label>
                  <input
                    type="email"
                    value={client.email}
                    onChange={(e) =>
                      setClient((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>

              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label>CEP</Label>
                  <input
                    type="text"
                    value={address.cep}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        cep: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Estado</Label>
                  <select
                    value={address.estadoId}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        estadoId: Number(e.target.value),
                      }))
                    }
                    className="rounded-md p-2 border shadow-lg border-gray-300"
                  >
                    <option value="">Selecione</option>

                    {states.map((state) => (
                      <option key={state.id} value={state.id}>
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
                    value={address.cidade}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        cidade: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Bairro</Label>
                  <input
                    type="text"
                    value={address.bairro}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        bairro: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>

              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label>Rua</Label>
                  <input
                    type="text"
                    value={address.complemento}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        complemento: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Número</Label>
                  <input
                    type="text"
                    value={address.numero}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        numero: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>

              <section>
                <div className="flex flex-col gap-2">
                  <Label>Complemento</Label>
                  <input
                    type="text"
                    value={address.complemento}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        complemento: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300"
                  />
                </div>
              </section>
            </div>
          </CardContent>
        )}
      </div>
    </div>
  );
}