import { getProduct } from "../api/productsApi";
import { Product } from "../types/products";
import ProductCard from "./ProductCard";

const ProductContainer = async () => {
    const products = await getProduct()
    return (
        <div className="flex flex-wrap justify-around gap-y-4">
            {products.map((product: Product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default ProductContainer;