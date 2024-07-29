import { Category } from "./categories"

export type Product = {
    id: number,
    title: string,
    price: string,
    category: Category,
    description: string,
    image: string,
}