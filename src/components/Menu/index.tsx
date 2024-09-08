import { useEffect, useState } from "react"
import { getMenuData } from "../../services/menu"
import { MenuData } from "../../utils/interfaces/menuInterface"
import { MenuContext } from "../../store"
import MenuItems from "../MenuItems"

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
        <MenuContext.Provider value={menuData}>
            <MenuItems/>
        </MenuContext.Provider>
    )
}


export default Menu