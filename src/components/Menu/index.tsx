import { useContext, useEffect, useState } from "react"
import { getMenuData } from "../../services/menu"
import { CategoriesInterface, Item, MenuData } from "../../utils/interfaces/menuInterface"
import MenuItem from "./MenuItem/index"
import Categories from "./Categories/index"
import Search from "./Search"
import useCart from "../../hooks/cart"
import Heading from "../Generic/Heading"
import Image from "../Generic/Image"
import BackIcon from '../../assets/images/back.svg'
import { MenuContext } from "../../store"


const Menu = () => {
    const data = useContext(MenuContext)
    const { cart, addItemToCart, resetCart } = useCart()

    return (
        <>
            <div className="w-full lg:w-[375px] relative">
                <div className="m-[20px] mt-[50px]">
                    <div onClick={() => {
                        resetCart()
                    }} className="mb-[20px]">
                        <Image url={BackIcon} alt="back-icon" style="w-[40px] h-[40px] cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-between mb-[28px]">
                        <Heading title="Search" style={'text-[26px]'} />
                        <Heading title={cart?.reduce((value, current) => Number(value) + Number(current.quantity), 0)} style={'text-[26px]'} />
                    </div>
                    <Search />
                    { 
                        data?.filteredData?.categories?.map((category: CategoriesInterface, index: number) => (
                            <div key={index + Math.random()}>
                                <Categories category={category} index={index} />
                                {
                                    data?.filteredData?.items?.map((item: Item, index: number) => {
                                        if (category.id == item.category_id) {
                                            return (
                                                <MenuItem item={item} index={index} cart={cart} addItemToCart={addItemToCart} />
                                            )
                                        }
                                    })
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}


export default Menu