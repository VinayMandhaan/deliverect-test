import { useContext } from "react"
import { MenuContext } from "../../store"


const MenuItems = () => {
    const menuData = useContext(MenuContext)

    console.log(menuData,'Data from Menu Items')

    return (
        <div>
            <span>Menu Items</span>
        </div>
    )
}

export default MenuItems