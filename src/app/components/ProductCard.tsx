import Image from "next/image"
import { Product } from "../types/products"

type ProductProps = {
    product: Product
} 

const ProductCard = ({ product }: ProductProps) => {
    return (
        <div className="p-3 border rounded-lg flex flex-col w-40">
            {/* image container */}
            <div className="w-24 h-auto m-auto">
                <Image src={product.image} alt="product-image" height={200} width={200} />
            </div>
            {/* item container */}
            <div className="flex flex-col">
                <h1 className="truncate">{product.title}</h1>
                <p className="font-semibold">${product.price}</p>
                {/* rating and count */}
                <div className="flex justify-between text-sm">
                    <p>{product.rating?.rate}</p>
                    <p>{product.rating?.count}</p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard