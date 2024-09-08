import { createContext, ReactNode, useEffect, useState } from "react";
import { MenuData } from "./utils/interfaces/menuInterface";
import { getMenuData } from "./services/menu";

interface MenuContextProps {
    menuData: MenuData | undefined;
    filteredData: MenuData | undefined;
    setFilteredData: React.Dispatch<React.SetStateAction<MenuData | undefined>>;
}
export const MenuContext = createContext<MenuContextProps | undefined>(undefined)

interface MenuProviderProps {
    children: ReactNode;
}

const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
    const [menuData, setMenuData] = useState<MenuData | undefined>(undefined)
    const [filteredData, setFilteredData] = useState<MenuData | undefined>(undefined)

    const getData = async () => {
        try {
            let response = await getMenuData()
            setMenuData(response)
            setFilteredData(response)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <MenuContext.Provider value={{ menuData, filteredData, setFilteredData }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuProvider

