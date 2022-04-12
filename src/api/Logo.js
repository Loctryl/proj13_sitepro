export const getLogo = async () => {
    const response = await fetch('http://localhost:1337/api/uploads?populate=*', { method: 'GET', headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } })
    const images = await response.json()
    return images;
}