import { useState } from "react";
import { products } from "../../data/products";
import { cuts } from "../../data/cuts";
import PageHeader from "../../components/layout/PageHeader";
import ProductsModal from "../../components/common/modals/ProductsModal";
import TableActions from "../../components/common/TableActions";
import TableCard from "../../components/common/TableCard";
import TableEmpty from "../../components/common/TableEmpty";
import { Button } from "../../components/ui/button";
import ProductDetail from "../../components/common/details/ProductDetail";
import { suppliers } from "../../data/suppliers";
import { categories } from "../../data/categories";

export default function Product() {
  const gridColumns = "grid grid-cols-[1.3fr_1fr_1fr_1fr_1fr_1fr_1fr]";
  const [openModalProducts, setOpenModalProducts] = useState(false);
  const [productList, setProductList] = useState(products)
  const [selectProductId, setSelectProductId] = useState<number | null>(null)

  const selectedProduct = productList.find(
    (product) => product.id === selectProductId
  )

  const selectedSupplier = suppliers.find(
    (supplier) => supplier.id === selectedProduct?.fornecedorId
  )

  const selectedCut = cuts.find(
    (cut) => cut.id === selectedProduct?.corteId
  )

  const selectedCategory = categories.find(
    (category) => category.id === selectedProduct?.categoriaId
  )

  const produtosEmEstoque = productList.filter(
    (product) => product.quantidade > 0,
  );

  const produtosSemEstoque = productList.filter(
    (product) => product.quantidade === 0,
  );

  function getCorteNome(corteId: number) {
    const corte = cuts.find((cut) => cut.id === corteId);

    return corte?.nome ?? "sem nome";
  }

  const addProduct = (newProduct: Omit<(typeof products)[number], "id">) => {
    setProductList((prev) => [
      ...prev,
      {
        id: prev.length + 1,
        ...newProduct
      }
    ])
  }

  const removeProduct = (id: number) => {
    setProductList((prev) => prev.filter((product) => product.id !== id))
  }

  return (
    <div className="p-7 pt-8">
      {/* Titulo */}
      <PageHeader
        title="Produtos"
        description="Gerencie os itens do seu estoque"
        buttonText="Novo Produto"
        onButtonClick={() => setOpenModalProducts(true)}
      />

      {/* conteudo */}
      {produtosEmEstoque.length === 0 ? (
        <TableEmpty
          title="Nenhum produto cadastrado"
          description="Adicione seus produtos para começar a gerenciar o estoque e acompanhar suas movimentações."
        />
      ) : (
        <>
          <TableCard
            gridColumns={gridColumns}
            headers={[
              "Nome",
              "Peso",
              "Corte",
              "Quantidade",
              "Venda",
              "Validade",
              <div className="flex justify-center">Ações</div>,
            ]}
          >
            {produtosEmEstoque.map((product) => (
              <div
                key={product.id}
                onClick={() => setSelectProductId(product.id)}
                className={`${gridColumns} items-center px-6 py-3 border-b border-gray-300 hover:bg-gray-100 last:border-b-0 cursor-pointer`}
              >
                <p className="font-medium">{product.nomeProduto}</p>
                <p className="font-medium">{product.peso} Kg</p>
                <p className="font-medium">{getCorteNome(product.corteId)}</p>
                <p className="font-medium">{product.quantidade} Un</p>
                <p className="font-medium">R$ {product.precoVenda.toFixed(2)}</p>
                <p className="font-medium">{product.dataValidade}</p>
                <TableActions 
                onDelet={() => removeProduct(product.id)}
                />
              </div>
            ))}
          </TableCard>

          {produtosSemEstoque.length > 0 && (
            <>
              <div className="mt-8 mb-6">
                <h2 className="text-xl font-bold font-serif">
                  Produtos sem estoque
                </h2>
                <p className="text-lg font-serif text-gray-600">
                  Gerencie os itens que precisam de reposição.
                </p>
              </div>

              <TableCard
                gridColumns="grid grid-cols-4"
                headers={[
                  "Nome",
                  "Corte",
                  <div className="flex justify-center">Quantidade</div>,
                  <div className="flex justify-center">Ações</div>,
                ]}
              >
                {produtosSemEstoque.map((product) => (
                  <div
                    key={product.id}
                    className="grid grid-cols-4 items-center border-b last:border-b-0 border-gray-300 hover:bg-gray-100 px-6 py-3"
                  >
                    <p className="font-medium">{product.nomeProduto}</p>
                    <p className="font-medium">{getCorteNome(product.corteId)}</p>

                    <div className="flex justify-center">
                      <span className="rounded-xl bg-red-200 text-red-700 px-3 py-1">
                        Sem estoque
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <Button className="py-4 px-5 bg-transparent text-gray-500 border border-gray-300 transition-all duration-300 ease-in-out hover:bg-gray-500 hover:text-white font-medium">
                        Repor estoque
                      </Button>
                    </div>
                  </div>
                ))}
              </TableCard>
            </>
          )}
        </>
      )}
      {/* componente modal */}
      <ProductsModal
        open={openModalProducts}
        onClose={() => setOpenModalProducts(false)}
        onAddProduct={addProduct}
      />

      <ProductDetail
      product={selectedProduct}
      category={selectedCategory}
      cut={selectedCut}
      supplier={selectedSupplier}
      onClose={() => setSelectProductId(null)}
      />
    </div>
  );
}
