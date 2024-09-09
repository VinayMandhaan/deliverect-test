import { useContext } from "react"
import { CategoriesInterface, Item } from "../../utils/interfaces/menuInterface"
import MenuItem from "./MenuItem/index"
import Categories from "./Categories/index"
import Search from "./Search"
import useCart from "../../hooks/cart"
import Heading from "../Generic/Heading"
import { MenuContext } from "../../store"
import ResetCart from "./ResetCart"


const Menu = () => {
    const data = useContext(MenuContext)
    const { cart, addItemToCart, resetCart, removeItemFromCart } = useCart()
    console.log(cart,'Cart')

    return (
        <>
            <div className="w-full lg:w-[375px] relative">
                <div className="m-[20px] mt-[50px]">
                    <ResetCart resetCart={resetCart} />
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
                                                <MenuItem item={item} index={index} cart={cart} addItemToCart={addItemToCart} removeItemFromCart={removeItemFromCart} />
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