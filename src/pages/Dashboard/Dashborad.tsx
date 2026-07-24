import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { BsFillBoxFill } from "react-icons/bs";
import { TbPigMoney } from "react-icons/tb";
import { MdOutlineHive } from "react-icons/md";

export default function Dashboard() {
  return (
    <div className="p-7 pt-8">
      <header>
        <h1 className="font-medium text-xl font-sans">Dashboard</h1>
        <p className="text-sm font-sans text-gray-600">
          Visão geral do seu estoque.
        </p>
      </header>

      <section className="grid grid-cols-3 gap-4 mt-8">
        {/* 1 Card */}
        <Card className="">
          <CardContent className="px-6">
            <section className="flex items-center justify-between">
              <span className="font-serif text-lg">Total de produtos</span>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center border-2">
                <BsFillBoxFill className="text-md text-gray-400" />
              </div>
            </section>
            <section className="mt-5">
              <h1 className="text-xl font-bold font-serif">0</h1>
              <p className="mt-2 font-seril text-gray-500">Itens cadastrados</p>
            </section>
          </CardContent>
        </Card>
        {/* 2 Card */}
        <Card className="">
          <CardContent className="px-6">
            <section className="flex items-center justify-between">
              <span className="font-serif text-lg">Produtos em estoque</span>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center border-2">
                <MdOutlineHive className="text-md text-gray-400" />
              </div>
            </section>
            <section className="mt-5">
              <h1 className="text-xl font-bold font-serif">0 un.</h1>
              <p className="mt-2 font-seril text-gray-500">
                Unidades disponiveis
              </p>
            </section>
          </CardContent>
        </Card>
        {/* 3 Card */}
        <Card className="">
          <CardContent className="px-6">
            <section className="flex items-center justify-between">
              <span className="font-serif text-lg">Valor total do estoque</span>
              <div className="w-8 h-8 rounded-lg flex items-center justify-center border-2">
                <TbPigMoney className="text-md text-gray-400" />
              </div>
            </section>
            <section className="mt-5">
              <h1 className="text-xl font-bold font-serif">R$ 0,0</h1>
              <p className="mt-2 font-seril text-gray-500">
                Preço x quantidade
              </p>
            </section>
          </CardContent>
        </Card>
      </section>

      {/* graficos */}
      <main className="mt-8">
        <Card>
          <CardHeader className="flex items-center justify-between">
            <section>
              <CardTitle>Entradas de estoque</CardTitle>
              <CardDescription>Unidades recebidas por mês</CardDescription>
            </section>
            <p>Ultimos 8 meses</p>
          </CardHeader>
          <CardContent>
            
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
