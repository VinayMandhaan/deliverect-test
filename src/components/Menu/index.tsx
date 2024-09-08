import { useEffect, useState } from "react"
import { getMenuData } from "../../services/menu"
import { CategoriesInterface, MenuData } from "../../utils/interfaces/menuInterface"
import { MenuContext } from "../../store"
import MenuItems from "../MenuItems"
import Categories from "../Categories"

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
            {
                menuData?.categories?.map((category: CategoriesInterface, index:number) => (
                    <Categories category={category} index={index}/>
                ))
            }
            <MenuItems/>
        </MenuContext.Provider>
    )
}


export default Menu