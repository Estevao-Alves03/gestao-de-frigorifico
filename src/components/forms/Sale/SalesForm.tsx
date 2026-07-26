import { useState } from "react";
import { Button } from "../../ui/button";
import CustomerSaleForm from "./CustomerSaleForm";
import ProductSaleForm from "./ProductSaleForm";

interface SalesFormProps {
  onCancel: () => void;
}

export interface ProductSale {
  id: number;
  produtoId: string;
  quantidade: string;
  precoVenda: string;
  desconto: string;
}

export interface ClientSale {
  nome: string;
  documento: string;
  rg: string;
  dataNascimento: string;
  email: string;
  telefone: string;
  enderecoId: number;
}

export interface AddressSale {
  cep: string;
  estadoId: number | "";
  cidade: string;
  bairro: string;
  numero: string;
  complemento: string;
}

export default function SalesForm({ onCancel }: SalesFormProps) {
  const [products, setProducts] = useState<ProductSale[]>([
    {
      id: Date.now(),
      produtoId: "",
      quantidade: "",
      precoVenda: "",
      desconto: "",
    },
  ]);

  const [client, setClient] = useState<ClientSale>({
    nome: "",
    documento: "",
    rg: "",
    dataNascimento: "",
    email: "",
    telefone: "",
    enderecoId: 0,
  });

  const [address, setAddress] = useState<AddressSale>({
    cep: "",
    estadoId: "",
    cidade: "",
    bairro: "",
    numero: "",
    complemento: "",
  });

  function handleFinishSale() {
    const sale = {
      cliente: client,
      endereco: address,
      produtos: products.map((item) => ({
        produtoId: Number(item.produtoId),
        quantidade: Number(item.quantidade),
        precoVenda: Number(item.precoVenda),
        desconto: Number(item.desconto),
        total:
          Number(item.quantidade || 0) *
            Number(item.precoVenda || 0) -
          Number(item.desconto || 0),
      })),
    };

    console.log(sale);

    onCancel()
  }

  return (
    <div>
      <ProductSaleForm
        products={products}
        setProducts={setProducts}
      />

      <CustomerSaleForm
        client={client}
        setClient={setClient}
        address={address}
        setAddress={setAddress}
      />

      <section className="flex justify-end gap-2 mt-3 pt-5 border-t">
        <Button
          type="button"
          variant="outline"
          className="py-5 px-6 font-bold font-serif"
          onClick={onCancel}
        >
          Cancelar
        </Button>

        <Button
          type="button"
          className="py-5 px-6 font-bold font-serif"
          onClick={handleFinishSale}
        >
          Finalizar Venda
        </Button>
      </section>
    </div>
  );
}