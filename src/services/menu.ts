import { MenuData } from "../utils/interfaces/menuInterface"
import { baseUrl } from "../utils/url"

export const getMenuData = (): Promise<MenuData> => {
    return new Promise((resolve, reject) => {
        fetch(`${baseUrl}/fe-code-challenge-1/menu.json`).then((response) => {
            resolve(response.json())
        }).catch(error => {
            reject(error)
        })
    })
}