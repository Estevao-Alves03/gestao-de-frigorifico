import { Button } from "../../components/ui/button";
import { GoPlus } from "react-icons/go";

export default function Product() {
  return (
    <div className="p-7 pt-8">
      <header className="flex items-center justify-between">
        <section>
          <h1 className="font-medium text-xl font-sans">Produtos</h1>
          <p className="text-sm font-sans text-gray-600">
            Gerencie os itens do seu estoque.
          </p>
        </section>

        <section>
          <Button className='items-center flex h-10 w-40'>
            <GoPlus />
            Novo Produto
          </Button>
        </section>
      </header>
    </div>
  );
}
