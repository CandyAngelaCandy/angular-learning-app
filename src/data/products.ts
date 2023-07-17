export const products = [{ id: 1, name: "Phone XL", description: "Phone XL description", price: 800 },
{ id: 2, name: "Phone Mini", description: "Phone Mini description", price: 500 },
{ id: 3, name: "Phone Standard", description: "", price: 700 }]

export interface Product {
    id: number,
    name: string,
    description: string,
    price: number
}