import { useEffect, useState } from "react"
import { getMenuData } from "../../services/menu"
import { MenuData } from "../../utils/interfaces/menuInterface"

const Menu = () => {
    const [menuData, setMenuData] = useState<MenuData | undefined>(undefined)
    const getData = async () => {
        try {
            let response = await getMenuData()
            setMenuData(response)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div>
            <h1>Menu</h1>
        </div>
    )
}


export default Menu