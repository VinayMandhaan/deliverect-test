import { useEffect, useState } from "react"
import { getMenuData } from "../../services/menu"
import { CategoriesInterface, Item, MenuData } from "../../utils/interfaces/menuInterface"
import { MenuContext } from "../../store"
import MenuItem from "./MenuItem/index"
import Categories from "./Categories/index"
import Search from "./Search"


const Menu = () => {
    const [menuData, setMenuData] = useState<MenuData | undefined>(undefined)
    const [filteredData, setFilteredData] = useState<MenuData | undefined>(undefined)
    const [searchText, setSearchText] = useState<string>('')

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
            <div className="w-full lg:w-[375px] relative">
                <div className="m-[20px] mt-[50px]">
                    <Search searchText={searchText} setSearchText={setSearchText} />
                    {
                        filteredData?.categories?.map((category: CategoriesInterface, index: number) => (
                            <>
                                <Categories category={category} index={index} />
                                {
                                    filteredData?.items?.map((item: Item, index: number) => {
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