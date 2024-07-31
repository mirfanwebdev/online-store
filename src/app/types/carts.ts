type ProductCart = {
    productId: number,
    quantity: number,
}

type Cart = {
    id: number,
    userId: number,
    date: string,
    products: ProductCart[]
}
