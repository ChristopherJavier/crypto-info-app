const getAll = async () => {

    const response = await fetch("https://api.coingecko.com/api/v3/coins")
    return response.json()
}

export default {
    getAll
}