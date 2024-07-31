const URL_API = 'https://fakestoreapi.com/carts'

async function getAllCart() {
    const res = await fetch(URL_API)
    if (!res.ok) {
        throw new Error("Failed to get cart")
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

async function getCartById(id: number) {
    const res = await fetch(`${URL_API}/${id}`)
    if (!res.ok) {
        throw new Error
    }
    return res.json()
}

async function getCartByUSer(userId: number) {
    const res = await fetch(`${URL_API}/user/${userId}`)
    if (!res.ok) {
        throw new Error
    }
    return res.json()
}