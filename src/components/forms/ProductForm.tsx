import { Button } from "../ui/button";
import { categories } from "../../data/categories";
import { cuts } from "../../data/cuts";
import { suppliers } from "../../data/suppliers";
import { Label } from "../ui/label";
import React, { useState } from "react";

interface ProductFormProps {
  onCancel: () => void;
  onAddProduct: (product: {
    nomeProduto:string,
    lote:string,
    categoriaId: number,
    corteId: number,
    fornecedorId: number,
    dataEntrada: string,
    dataValidade: string,
    peso: number,
    quantidade: number,
    precoCompra: number,
    precoVenda: number
  }) => void;
}

export default function ProductForm({ onCancel, onAddProduct }: ProductFormProps) {

  const [form, setForm] = useState({
    nomeProduto:"",
    lote:"",
    categoriaId: "",
    corteId: "",
    fornecedorId: "",
    dataEntrada: "",
    dataValidade: "",
    peso: "",
    quantidade: "",
    precoCompra: "",
    precoVenda: ""
  })

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log("submit")

    onAddProduct({
      nomeProduto: form.nomeProduto,
      lote: form.lote,
      categoriaId: Number(form.categoriaId),
      corteId: Number(form.corteId),
      fornecedorId: Number(form.fornecedorId),
      dataEntrada: form.dataEntrada,
      dataValidade: form.dataValidade,
      peso: Number(form.peso),
      quantidade: Number(form.quantidade),
      precoCompra: Number(form.precoCompra),
      precoVenda: Number(form.precoVenda)
    })

    onCancel()
  }


  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Nome */}
      <div className="flex flex-col gap-2">
        <Label>Nome</Label>

        <input
          type="text"
          value={form.nomeProduto}
          onChange={(e) => handleChange("nomeProduto", e.target.value)}
          placeholder="Ex: Contra-Filé"
          className="border rounded-md p-2.5 border-gray-300 shadow-lg"
        />
      </div>

      {/* Categoria e Corte */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Categoria</Label>

          <select 
          value={form.categoriaId}
          onChange={(e) => handleChange('categoriaId', e.target.value)}
          name="category" 
          className="border rounded-md p-2.5 border-gray-300 shadow-lg">
            <option value="">Selecione</option>

            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <Label>Corte</Label>

          <select 
          value={form.corteId}
          onChange={(e) => handleChange("corteId", e.target.value)}
          name="cut" 
          className="border rounded-md p-2.5 border-gray-300 shadow-lg">
            <option value="">Selecione</option>

            {cuts.map((cut) => (
              <option key={cut.id} value={cut.id}>
                {cut.nome}
              </option>
            ))}
          </select>
        </div>
      </section>

      {/* Fornecedor e lote */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Fornecedor</Label>

          <select 
          value={form.fornecedorId}
          onChange={(e) => handleChange("fornecedorId", e.target.value)}
          name="supplier" 
          className="border rounded-md p-2.5 border-gray-300 shadow-lg">
            <option value="">Selecione</option>

            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.empresa}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <Label>NF - Lote</Label>

          <input
            name="batch"
            type="text"
            value={form.lote}
            onChange={(e) => handleChange("lote", e.target.value)}
            placeholder="Lote - 20260723-01"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Datas */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Data de entrada</Label>

          <input
            name="entry_date"
            type="date"
            value={form.dataEntrada}
            onChange={(e) => handleChange("dataEntrada", e.target.value)}
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Validade</Label>

          <input
            name="expiration_date"
            type="date"
            value={form.dataValidade}
            onChange={(e) => handleChange("dataValidade", e.target.value)}
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Peso e quantidade */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Peso (kg)</Label>

          <input
            name="weight"
            type="number"
            value={form.peso}
            onChange={(e) => handleChange("peso", e.target.value)}
            placeholder="0"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Quantidade</Label>

          <input
            name="quantity"
            type="number"
            value={form.quantidade}
            onChange={(e) => handleChange("quantidade", e.target.value)}
            placeholder="0"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Preços */}
      <section className="grid grid-cols-2 gap-3">
        <div className="flex flex-col gap-2">
          <Label>Preço de compra</Label>

          <input
            name="purchase_price"
            type="number"
            step="0.01"
            value={form.precoCompra}
            onChange={(e) => handleChange("precoCompra", e.target.value)}
            placeholder="R$ 0,00"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label>Preço de venda</Label>

          <input
            name="sale_price"
            type="number"
            step="0.01"
            value={form.precoVenda}
            onChange={(e) => handleChange("precoVenda", e.target.value)}
            placeholder="R$ 0,00"
            className="border rounded-md p-2.5 border-gray-300 shadow-lg"
          />
        </div>
      </section>

      {/* Botões */}
      <div className="flex justify-end gap-3 pt-4 ">
        <Button className="py-5 px-6 font-bold font-serif cursor-pointer" type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>

        <Button className="py-5 px-6 font-bold font-serif cursor-pointer" type="submit">Salvar</Button>
      </div>
    </form>
  );
}
