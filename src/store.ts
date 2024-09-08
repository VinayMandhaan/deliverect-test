import { createContext } from "react";
import { MenuData } from "./utils/interfaces/menuInterface";

interface MenuContextProps {
    menuData: MenuData | undefined;
    filteredData: MenuData | undefined;
    setFilteredData: React.Dispatch<React.SetStateAction<MenuData | undefined>>;
}

export const MenuContext = createContext<MenuContextProps | undefined>(undefined)
