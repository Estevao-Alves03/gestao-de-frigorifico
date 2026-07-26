import { GoPlus } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { products as productsData } from "../../../data/products";
import { ProductSale } from "./SalesForm";

interface ProductSaleProps {
  products: ProductSale[];
  setProducts: React.Dispatch<React.SetStateAction<ProductSale[]>>;
}

export default function ProductSaleForm({
  products,
  setProducts,
}: ProductSaleProps) {
  function addProduct() {
    setProducts((prev) => [
      ...prev,
      {
        id: Date.now(),
        produtoId: "",
        quantidade: "",
        precoVenda: "",
        desconto: "",
      },
    ]);
  }

  function removeProduct(id: number) {
    if (products.length <= 1) return;

    setProducts((prev) => prev.filter((item) => item.id !== id));
  }

  function handleChange(
    id: number,
    field: keyof Omit<ProductSale, "id">,
    value: string
  ) {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  }

  return (
    <div>
      <h1 className="text-lg font-serif font-medium">
        SEÇÃO 1 — PRODUTOS
      </h1>

      <Card className="mt-4 rounded-md border-gray-200 shadow-lg border">
        <CardHeader className="grid grid-cols-[1.3fr_0.5fr_0.5fr_0.5fr_0.5fr_0.2fr] items-center border-b text-muted-foreground">
          <h1>Produto</h1>
          <h1>Qnt.</h1>
          <h1>Valor Unit.</h1>
          <h1>Desconto</h1>
          <h1>Total</h1>
        </CardHeader>

        <CardContent className="p-0">
          {products.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-[1.3fr_0.5fr_0.5fr_0.5fr_0.5fr_0.2fr] items-center px-6 py-4 gap-2 border-b last:border-b-0"
            >
              <select
                value={item.produtoId}
                onChange={(e) =>
                  handleChange(item.id, "produtoId", e.target.value)
                }
                className="border rounded-md p-2.5 border-gray-300 shadow-lg"
              >
                <option value="">Selecione</option>

                {productsData.map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.nomeProduto}
                  </option>
                ))}
              </select>

              <input
                type="number"
                placeholder="0"
                value={item.quantidade}
                onChange={(e) =>
                  handleChange(item.id, "quantidade", e.target.value)
                }
                className="border rounded-md p-2 w-full border-gray-300 shadow-lg"
              />

              <input
                type="number"
                placeholder="0,00"
                value={item.precoVenda}
                onChange={(e) =>
                  handleChange(item.id, "precoVenda", e.target.value)
                }
                className="border rounded-md p-2 w-full border-gray-300 shadow-lg"
              />

              <input
                type="number"
                placeholder="0,00"
                value={item.desconto}
                onChange={(e) =>
                  handleChange(item.id, "desconto", e.target.value)
                }
                className="border rounded-md p-2 w-full border-gray-300 shadow-lg"
              />

              <input
                type="text"
                readOnly
                value={(
                  Number(item.quantidade || 0) *
                    Number(item.precoVenda || 0) -
                  Number(item.desconto || 0)
                ).toFixed(2)}
                className="border rounded-md p-2 w-full border-gray-300 shadow-lg bg-gray-100"
              />

              <button
                type="button"
                onClick={() => removeProduct(item.id)}
                className="py-2.5 shadow-lg rounded-md flex items-center justify-center group bg-transparent border border-gray-300 transition-all duration-300 ease-in-out hover:bg-red-500 hover:border-none cursor-pointer"
              >
                <IoTrashOutline className="text-red-600 group-hover:text-white duration-300 ease-in-out" />
              </button>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button
        type="button"
        onClick={addProduct}
        className="mt-3 py-5 px-6 font-serif font-bold"
      >
        <GoPlus />
        Adicionar Produto
      </Button>
    </div>
  );
}