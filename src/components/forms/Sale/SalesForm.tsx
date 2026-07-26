import { Button } from "../../ui/button";
import CustomerSaleForm from "./CustomerSaleForm";
import ProductSaleForm from "./ProductSaleForm";

interface SalesFormProps {
    onCancel: () => void;
}

export default function SalesForm({onCancel}: SalesFormProps) {
  return (
    <div>
      <ProductSaleForm/>
      <CustomerSaleForm/>
      <section className="flex justify-end gap-2 mt-3 pt-5 border-t">
        <Button className="py-5 px-6 font-bold font-serif" type="button" variant={"outline"} onClick={onCancel}>Cancelar</Button>
        <Button className="py-5 px-6 font-bold font-serif">Finalizar Venda</Button>
      </section>
    </div>
  )
}