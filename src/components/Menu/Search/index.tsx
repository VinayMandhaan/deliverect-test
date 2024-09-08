import React, { useContext } from "react";
import Image from "../../Generic/Image"
import Input from "../../Generic/Input";
import SearchIcon from '../../../assets/images/search.svg'
import { MenuContext } from "../../../store";
import { Item } from "../../../utils/interfaces/menuInterface";


interface SearchProps {
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ searchText, setSearchText }) => {
    const data = useContext(MenuContext)

    const handleSearch = (text: string) => {
        setSearchText(text)
        if (text === '' || text.length === 0) {
            data?.setFilteredData(data.menuData)
        } else {
            const filteredItems: Item[] = data?.menuData?.items.filter((item: Item) =>
                item.name?.toLowerCase().includes(text.toLowerCase())
            ) || [];

            data?.setFilteredData({
                categories: data.menuData?.categories,
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