import React, { useContext, useState } from "react";
import Image from "../../Generic/Image"
import Input from "../../Generic/Input";
import SearchIcon from '../../../assets/images/search.svg'
import { Item } from "../../../utils/interfaces/menuInterface";
import { MenuContext } from "../../../store";

const Search: React.FC = () => {
    const data = useContext(MenuContext)
    const [searchText, setSearchText] = useState<string>('')

    const handleSearch = (text: string) => {
        setSearchText(text)
        if (text === '' || text.length === 0) {
            data?.setFilteredData(data.menuData)
        } else {
            const filteredItems: Item[] = data?.menuData?.items.filter((item: Item) =>
                item.name?.toLowerCase().includes(text.toLowerCase())
            ) || [];

            const filteredCategories = data?.menuData?.categories && data.menuData?.categories.filter((category) =>
                filteredItems.some((item) => item.category_id === category.id)
            ) || [];
           
            data?.setFilteredData({
                categories: filteredCategories,
                items: filteredItems,
            });
        }
    }

    return (
        <Input
            value={searchText}
            placeholder='Search for dishes...'
            type='text'
            handleChange={(text: string) => handleSearch(text)}
            leftIcon={<Image url={SearchIcon} alt="search-icon" style="mr-[8px]" />}
        />
    )
}

export default Search