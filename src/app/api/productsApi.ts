import { Categories, Category } from "../types/categories"
import { Product } from "../types/products"

const URL_API = 'https://fakestoreapi.com/products'

export async function getProduct(): Promise<Product[]> {
    const res = await fetch(URL_API)
    if (!res.ok) {
        throw new Error('failed to get product')
    }
    return res.json()

    // try {
    //     const response = await fetch(URL_API)
    //     const data = await response.json()
    //     return data
    // } catch (error) {
    //     console.log(error)
    // }
}

export async function productById(id: number): Promise<Product> {
    const res = await fetch(`${URL_API}/${id}`)
    if (!res.ok) {
        throw new Error('failed to get product')
    }
    return res.json()
}

export async function limitProduct(limit: number): Promise<Product[]> {
    const res = await fetch(`${URL_API}?limit=${limit}`)
    if (!res.ok) {
        throw new Error
    }
    return res.json()
}

export async function getCategory(): Promise<Categories>{
    const res = await fetch(`${URL_API}/categories`)
    if (!res.ok) {
        throw new Error
    }
    return res.json()
}

export async function getByCategory(category: Category): Promise<Product[] | undefined> {
    const res = await fetch(`${URL_API}/category/${category}`)
    if (!res.ok) {
        throw new Error
    }
    return res.json()
}

