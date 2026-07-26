import { GoPlus } from "react-icons/go";
import { Button } from "../../ui/button";
import { Card, CardHeader, CardContent } from "../../ui/card";
import { products } from "../../../data/products";
import { IoTrashOutline } from "react-icons/io5";
import { useState } from "react";

export default function ProductSaleForm() {
  const [Items, setItems] = useState([
    {
      id: 1,
      produto: "",
      quantidade: "",
      valor: "",
      desconto: "",
      total: "",
    },
  ]);

  const addProduct = () => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now(),
        produto: "",
        quantidade: "",
        valor: "",
        desconto: "",
        total: "",
      },
    ]);
  };

  const removeProduct = (id: number) => {
    if(Items.length <= 1) return;

    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 className="text-lg font-serif font-medium">SEÇÃO 1 — PRODUTOS</h1>
      <Card className="mt-4 rounded-md border-gray-200 shadow-lg border">
        <CardHeader className="grid grid-cols-[1.3fr_0.5fr_0.5fr_0.5fr_0.5fr_0.2fr] items-center border-b text-muted-foreground">
          <h1>Produto</h1>
          <h1>Qnt.</h1>
          <h1>Valor Unit.</h1>
          <h1>Desconto</h1>
          <h1>Total</h1>
        </CardHeader>
        <CardContent className="p-0">
          {Items.map((item) => (
            <div
            key={item.id}
            className="grid grid-cols-[1.3fr_0.5fr_0.5fr_0.5fr_0.5fr_0.2fr] items-center px-6 py-4 gap-2 border-b last:border-b-0">
              <select className="border rounded-md p-2.5 border-gray-300 shadow-lg">
                <option value="">Selecione</option>

                {products.map((product) => (
                  <option value={product.id} key={product.id}>
                    {product.nome}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder="0"
                className="border rounded-md p-2 w-full border-gray-300 shadow-lg"
              />
              <input
                type="text"
                placeholder="0,00"
                className="border rounded-md p-2 w-full border-gray-300 shadow-lg"
              />
              <input
                type="text"
                placeholder="0,00"
                className="border rounded-md p-2 w-full border-gray-300 shadow-lg"
              />
              <input
                type="text"
                placeholder="0,00"
                className="border rounded-md p-2 w-full border-gray-300 shadow-lg"
              />
              <button
                onClick={() => removeProduct(item.id)}
                className="py-2.5 shadow-lg rounded-md flex items-center justify-center group bg-transparent border border-gray-300 transition-all duration-300 ease-in-out hover:bg-red-500 hover:border-none cursor-pointer"
              >
                <IoTrashOutline className="text-red-600 group-hover:text-white duration-300 ease-in-out" />
              </button>
            </div>
          ))}
        </CardContent>
      </Card>
      <Button onClick={addProduct} className="mt-3 py-5 px-6 cursor-pointer font-serif font-bold w-fu">
        <GoPlus />
        Adicionar Produto
      </Button>
    </div>
  );
}
