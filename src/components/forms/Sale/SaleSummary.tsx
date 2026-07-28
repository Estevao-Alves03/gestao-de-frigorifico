import { Card, CardContent } from "../../ui/card";

export default function SaleSummary() {
  return (
    <div>
      <h1 className="text-center text-xl font-bold font-serif pb-5 border-b">Resumo da venda</h1>
      <section>
        <div className="flex items-center justify-between mx-0.5 my-3 gap-2">
          <h1 className="text-base font-serif text-muted-foreground">Quantidade de itens</h1>
          <p className="text-base font-serif text-muted-foreground">2</p>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between mx-0.5 my-3 gap-2">
          <h1 className="text-base font-serif text-muted-foreground">Subtotal</h1>
          <p className="text-base font-serif text-muted-foreground">R$ 1.234,54</p>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between mx-0.5 my-3 gap-2">
          <h1 className="text-base font-serif text-muted-foreground">Desconto</h1>
          <p className="text-base font-serif text-muted-foreground">R$ 87.96</p>
        </div>
      </section>
      <section>
        <div className="flex items-center justify-between mx-0.5 my-3 gap-2">
          <h1 className="text-base font-serif text-muted-foreground">Forma de pagamento</h1>
          <p className="text-base font-serif text-muted-foreground">Cartão de crédito</p>
        </div>
      </section>

      <Card className="mt-7 border-gray-200 shadow-xl border">
        <CardContent>
            <div className="flex flex-col text-center justify-center">  
                <h1 className="text-base font-serif text-muted-foreground font-medium">Total da Venda</h1>
                <h1 className="text-2xl font-serif font-bold">R$ 1.123,89</h1>
            </div>
        </CardContent>
      </Card>
    </div>
  );
}
