import { useState } from "react";
import { CardContent } from "../../ui/card";
import { Switch } from "../../ui/switch";
import { states } from "../../../data/states";
import { Label } from "../../ui/label";
import { ClientSale, AddressSale } from "./SalesForm";

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
            <Label className="text-xs">
              Nome <p className="text-red-500 font-bold">*</p>
            </Label>
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
              className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
            />
          </div>
        </section>

        <section className="grid grid-cols-2 gap-2">
          <div className="flex flex-col gap-1">
            <Label className="text-xs">
              CPF <p className="text-red-500 font-bold">*</p>
            </Label>
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
              className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
            />
          </div>

          <div className="flex flex-col gap-1">
            <Label className="text-xs">
              Telefone <p className="text-red-500 font-bold">*</p>
            </Label>
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
              className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
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
                  <Label className="text-xs">Documento RG</Label>
                  <input
                    type="text"
                    placeholder="Digite o RG"
                    value={client.rg}
                    onChange={(e) =>
                      setClient((prev) => ({
                        ...prev,
                        rg: e.target.value,
                      }))
                    }
                    className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-xs">Data de nascimento</Label>
                  <input
                    type="date"
                    value={client.dataNascimento}
                    onChange={(e) =>
                      setClient((prev) => ({
                        ...prev,
                        dataNascimento: e.target.value,
                      }))
                    }
                    className="border rounded-md p-2 shadow-lg border-gray-300 text-xs"
                  />
                </div>
              </section>

              <section>
                <div className="flex flex-col gap-2">
                  <Label className="text-xs">Email</Label>
                  <input
                    type="email"
                    placeholder="exemplo@email.com"
                    value={client.email}
                    onChange={(e) =>
                      setClient((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
                  />
                </div>
              </section>

              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label className="text-xs">CEP</Label>
                  <input
                    type="text"
                    placeholder="00000-000"
                    value={address.cep}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        cep: e.target.value,
                      }))
                    }
                    className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-xs">Estado</Label>
                  <select
                    value={address.estadoId}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        estadoId: Number(e.target.value),
                      }))
                    }
                    className="rounded-md p-1.5 border shadow-lg border-gray-300 placeholder:text-xs text-xs"
                  >
                    <option value="">Selecione o estado</option>

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
                  <Label className="text-xs">Cidade</Label>
                  <input
                    type="text"
                    placeholder="Digite a cidade"
                    value={address.cidade}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        cidade: e.target.value,
                      }))
                    }
                    className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-xs">Bairro</Label>
                  <input
                    type="text"
                    placeholder="Digite o bairro"
                    value={address.bairro}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        bairro: e.target.value,
                      }))
                    }
                    className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
                  />
                </div>
              </section>

              <section className="grid grid-cols-2 gap-2">
                <div className="flex flex-col gap-2">
                  <Label className="text-xs">Rua</Label>
                  <input
                    type="text"
                    placeholder="Digite a rua"
                    value={address.complemento}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        rua: e.target.value,
                      }))
                    }
                    className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label className="text-xs">Número</Label>
                  <input
                    type="text"
                    placeholder="Ex: 123"
                    value={address.numero}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        numero: e.target.value,
                      }))
                    }
                    className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
                  />
                </div>
              </section>

              <section>
                <div className="flex flex-col gap-2">
                  <Label className="text-xs">Complemento</Label>
                  <input
                    type="text"
                    placeholder="Apartamento, casa, referência..."
                    value={address.complemento}
                    onChange={(e) =>
                      setAddress((prev) => ({
                        ...prev,
                        complemento: e.target.value,
                      }))
                    }
                    className="border rounded-md p-1.5 shadow-lg border-gray-300 placeholder:text-xs"
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
