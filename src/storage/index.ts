export const storeItem = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value))
}


export const getItem = (key: string) => {
    return localStorage.getItem(key)
}


export const deleteItem = (key: string) => {
    localStorage.removeItem(key)
}