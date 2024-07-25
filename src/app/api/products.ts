import { Categories } from "../types/categories"

const URL_API = 'https://fakestoreapi.com/products'

async function getProduct() {
    try {
        const response = await fetch(URL_API)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function detailProduct(id:number) {
    try {
        const response = await fetch(`${URL_API}/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function limitProduct(limit:number) {
    try {
        const response = await fetch(`${URL_API}?limit=${limit}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getCategory() {
    try {
        const response = await fetch(`${URL_API}/categories`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getByCategory(category: Categories) {
    try {
        const response = await fetch(`${URL_API}/category/${category}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

