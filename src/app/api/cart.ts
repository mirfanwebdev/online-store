const URL_API = 'https://fakestoreapi.com/carts'

async function getAllCart() {
    try {
        const response = await fetch(URL_API)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getCartById(id:number) {
    try {
        const response = await fetch(`${URL_API}/${id}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

async function getCartByUSer(userId: number) {
    try {
        const response = await fetch(`${URL_API}/user/${userId}`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}