import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "../../components/ui/button";
import { GoPlus } from "react-icons/go";
import { FaPencil } from "react-icons/fa6";
import { IoTrashOutline } from "react-icons/io5";


export default function Product() {

  // produtos teste
 const products = [
  {
    id: 1,
    name: "Picanha",
    price: 89.9,
    stock: 15,
  },
  {
    id: 2,
    name: "Fraldinha",
    price: 54.9,
    stock: 8,
  },
  {
    id: 3,
    name: "Alcatra",
    price: 69.9,
    stock: 20,
  },
  {
    id: 4,
    name: "Contra Filé",
    price: 49.9,
    stock: 0,
  },
];

  return (
    <div className="p-7 pt-8">
      {/* Titulo */}
      <header className="flex items-center justify-between">
        <section>
          <h1 className="text-gray-900 font-medium text-xl font-sans">Produtos</h1>
          <p className="text-sm font-sans text-gray-600">
            Gerencie os itens do seu estoque.
          </p>
        </section>

        <section>
          <Button className='text-sm items-center flex h-10 w-40'>
            <GoPlus />
            Novo Produto
          </Button>
        </section>
      </header>

      {/* conteudo */}
      <Card className="mt-8 border-gray-300 shadow-">
        <CardHeader className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-b border-gray-300 pb-4">
          <h1 className="text-muted-foreground font-medium">Nome</h1>
          <h1 className="text-muted-foreground font-medium">Preço</h1>
          <h1 className="text-muted-foreground font-medium text-center">Quantidade</h1>
          <h1 className="text-muted-foreground font-medium text-right pr-8">Ações</h1>
        </CardHeader>
        <CardContent className="p-0">
          <div>
            {products.map((product) => (
              <div 
              key={product.id} 
              className="grid grid-cols-[2fr_1fr_1fr_1fr] items-center border-b border-gray-300 px-6 py-3 last:border-b-0 text-muted-foreground hover:bg-gray-100"
              >
               <p>{product.name}</p>
               <p>R$ {product.price}</p>
               <p className="text-center">
                <span className={product.stock === 0 ? "text-red-400 bg-red-200 rounded-lg px-3 py-1" : "text-muted-foreground"}>
                {product.stock === 0 ? "Sem estoque" : `${product.stock} Un`}
               </span>
               </p>

               <div className="justify-self-end flex gap-1">
                <button className="border-transparent border p-2 rounded-md hover:bg-gray-200">
                  <FaPencil className=""/>
                </button>
                <button className="border-transparent border p-2 rounded-md hover:bg-red-200">
                  <IoTrashOutline className="text-red-500"/>
                </button>
               </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
