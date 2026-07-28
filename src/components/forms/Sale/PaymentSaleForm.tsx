import { useState } from "react";
import { paymentMethod } from "../../../data/paymentMethod";
import { Label } from "../../ui/label";

interface PaymentSaleFormProps {
    valorVenda: number
}

export default function PaymentSaleForm({valorVenda}: PaymentSaleFormProps) {

  const [paymentMethodId, setPaymentMethodId] = useState("");
  const selectedMethod = paymentMethod.find(
    (method) => method.id === Number(paymentMethodId),
  );

  const [parcelas, setParcelas] = useState(1)
  const [juros, setJuros] = useState(0)

  const valorJuros = valorVenda * (juros / 100)
  const total = valorVenda + valorJuros
  const valorParcela = total / parcelas

  function renderPaymentFields() {
    switch (selectedMethod?.method) {
      case "Pix":
      case "Cartão de débito":
        return (
          <div className="border p-4 border-gray-300 shadow-lg mt-4 rounded-md bg-gray-300/40 font-medium font-serif">
            <h1>Pagamento via {selectedMethod?.method} selecionado</h1>
          </div>
        );
      case "Dinheiro":
        return (
          <div className="border p-4 border-gray-300 shadow-lg mt-4 rounded-md">
            <section className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <Label className="text-xs">Valor recebido</Label>

                <div className="flex items-center border rounded-md border-gray-300 px-3">
                  <span className="text-gray-500 mr-1 mt-0.5 text-xs">R$</span>

                  <input
                    type="number"
                    placeholder="0,00"
                    className="flex-1 bg-transparent outline-none py-1.5 placeholder:text-xs"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-xs">Troco</Label>
                <input
                  placeholder="R$ 0,00"
                  disabled
                  className="border p-1.5 rounded-md border-gray-300 placeholder:text-xs bg-gray-300/40"
                />
              </div>
            </section>
          </div>
        );
      case "Cartão de crédito":
        return (
          <div className="border p-4 mt-4 rounded-md border-gray-300 shadow-lg">
            <section className="grid grid-cols-2 gap-2">
              <div className="flex flex-col gap-2">
                <Label className="text-xs">Quantidade de parcelas</Label>
                <input
                  value={parcelas}
                  onChange={(e) => setParcelas(Number(e.target.value))}
                  placeholder="0x"
                  className="rounded-md p-1.5 border border-gray-300 placeholder:text-xs"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-xs">Taxa de juros (%)</Label>
                <input
                  value={juros}
                  onChange={(e) => setJuros(Number(e.target.value))}
                  className="rounded-md p-1.5 border border-gray-300 placeholder:text-xs"
                />
              </div>
            </section>

            <section className="grid grid-cols-3 gap-2 mt-3">
                <div className="flex flex-col gap-0.5 border border-gray-300 shadow-lg p-2 rounded-md">
                    <h1 className="text-xs text-muted-foreground">Juros</h1>
                    <h1 className="text-md font-medium font-serif">R$ {valorJuros.toFixed(2)}</h1>
                </div>
                <div className="flex flex-col gap-0.5 border border-gray-300 shadow-lg p-2 rounded-md">
                    <h1 className="text-xs text-muted-foreground">Total</h1>
                    <h1 className="text-md font-medium font-serif">R$ {total.toFixed(2)}</h1>
                </div>
                <div className="flex flex-col gap-0.5 border border-gray-300 shadow-lg p-2 rounded-md">
                    <h1 className="text-xs text-muted-foreground">Parcela</h1>
                    <h1 className="text-md font-medium font-serif">{parcelas}x de R$ {valorParcela.toFixed(2)}</h1>
                </div>
            </section>
          </div>
        );
      default:
        return null;
    }
  }

  return (
    <div className="mt-6">
      <h1 className="font-medium text-lg font-serif pb-4">
        SEÇÃO 3 - PAGAMENTO
      </h1>

      <section className="flex flex-col gap-1.5">
        <Label>
          Forma de pagamento <p className="text-red-500 font-bold">*</p>
        </Label>
        <select
          value={paymentMethodId}
          onChange={(e) => setPaymentMethodId(e.target.value)}
          className="border rounded-md p-1.5 text-xs w-76 border-gray-300 shadow-lg"
        >
          <option value="" disabled>
            Selecione
          </option>

          {paymentMethod.map((method) => (
            <option value={method.id}>{method.method}</option>
          ))}
        </select>
      </section>

      {renderPaymentFields()}
    </div>
  );
}
