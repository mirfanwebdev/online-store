import { Categories, Category } from "../types/categories"
import { Product } from "../types/products"

const URL_API = 'https://fakestoreapi.com/products'

async function getProduct(): Promise<Product[] | undefined> {
    try {
        const response = await fetch(URL_API)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function productById(id: number): Promise<Product | undefined> {
    try {
        const response = await fetch(`${URL_API}/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function limitProduct(limit:number): Promise<Product[] | undefined> {
    try {
        const response = await fetch(`${URL_API}?limit=${limit}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getCategory(): Promise<Categories | undefined>{
    try {
        const response = await fetch(`${URL_API}/categories`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getByCategory(category: Category): Promise<Product[] | undefined> {
    try {
        const response = await fetch(`${URL_API}/category/${category}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

