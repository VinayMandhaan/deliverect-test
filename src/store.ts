import { createContext } from "react";
import { MenuData } from "./utils/interfaces/menuInterface";

export const MenuContext = createContext<MenuData | undefined>(undefined)