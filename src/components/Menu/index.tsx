import { useEffect, useState } from "react"
import { getMenuData } from "../../services/menu"
import { CategoriesInterface, Item, MenuData } from "../../utils/interfaces/menuInterface"
import { MenuContext } from "../../store"
import MenuItem from "./MenuItem/index"
import Categories from "./Categories/index"
import Input from "../Generic/Input"
import Search from '../../assets/images/search.svg'
import Image from "../Generic/Image"


const Menu = () => {
    const [menuData, setMenuData] = useState<MenuData | undefined>(undefined)
    const [searchText, setSearchText] = useState<string>('')
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
                    <Input 
                    value={searchText} 
                    placeholder='Search for dishes...' 
                    type='text' 
                    handleChange={(text: string) => setSearchText(text)} 
                    leftIcon={<Image url={Search} alt="search-icon" style="mr-[8px]"/>}
                    />
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