import { Category } from "./categories"

export type Product = {
    id: number,
    title: string,
    price: number,
    category: Category,
    description: string,
    image: string,
    rating?: {
        rate: number,
        count: number,
    }
}