import { useEffect, useState } from "react"
import { getMenuData } from "../../services/menu"
import { CategoriesInterface, Item, MenuData } from "../../utils/interfaces/menuInterface"
import { MenuContext } from "../../store"
import MenuItem from "../MenuItem"
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
            <div className="w-full lg:w-[375px] relative">
                <div className="m-[20px] mt-[50px]">
                    {
                        menuData?.categories?.map((category: CategoriesInterface, index: number) => (
                            <>
                                <Categories category={category} index={index} />
                                {
                                    menuData?.items?.map((item: Item, index: number) => {
                                        if (category.id == item.category_id) {
                                            return (
                                                <MenuItem item={item} index={index} />
                                            )
                                        }
                                    })
                                }
                            </>
                        ))
                    }
                </div>
            </div>
        </MenuContext.Provider>
    )
}


export default Menu