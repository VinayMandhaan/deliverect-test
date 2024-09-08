import { useState } from "react"
import { Item } from "../utils/interfaces/menuInterface"


const useCart = () => {
    const [cart, setCart] = useState<Item[] | []>([])

    const addItemToCart = (menuItem: Item) => {
        let filterItem = cart?.find((x: Item) => x.id === menuItem?.id);
        if (filterItem && filterItem.quantity) {
            if (filterItem?.quantity < filterItem?.stock?.availability) {
                let updatedCart: Item[] = cart?.map((cart: Item) => {
                    return cart?.id == menuItem?.id ? { ...cart, quantity: cart.quantity ? cart.quantity + 1 : 0 } : cart
                })
                setCart(updatedCart)
            } else {
                alert('Item out of stock')
            }
        } else {
            let newCart = [...cart];
            let payload = {
                ...menuItem,
                quantity: 1
            };
            newCart.push(payload);
            setCart(newCart)
        }
    }

    return { cart, addItemToCart }

}

export default useCart