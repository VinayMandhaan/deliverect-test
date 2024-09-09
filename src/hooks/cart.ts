import { useCallback, useEffect, useState } from "react"
import { Item } from "../utils/interfaces/menuInterface"
import { deleteItem, getItem, storeItem } from "../storage"


const useCart = () => {
    const [cart, setCart] = useState<Item[]>(() => {
        const localStorageCart = getItem('cart')
        if (localStorageCart) {
            return JSON.parse(localStorageCart)
        } else {
            return []
        }
    })

    useEffect(() => {
        storeItem('cart', cart)
    }, [cart])
    
    const addItemToCart = (menuItem: Item) => {
        let filterItem = cart?.find((x: Item) => x.id === menuItem?.id);
        if (filterItem && filterItem.quantity) {
            if (filterItem?.quantity < filterItem?.stock?.availability) {
                let updatedCart: Item[] = cart?.map((cart: Item) => {
                    return cart?.id === menuItem?.id ? { ...cart, quantity: cart.quantity ? cart.quantity + 1 : 0 } : cart
                })
                setCart(updatedCart)
                storeItem('cart', updatedCart)
            } else {
                alert('Item out of stock')
            }
        } else {
            if(menuItem?.stock?.availability > 0) {
                let newCart = [...cart];
                let payload = {
                    ...menuItem,
                    quantity: 1
                };
                newCart.push(payload);
                setCart(newCart)
                storeItem('cart', newCart)
            } else {
                alert('Item out of stock')
            }
            
        }
    }

    const resetCart = useCallback(() => {
        setCart([]);
        deleteItem('cart')
    }, []);

    return { cart, addItemToCart, resetCart }

}

export default useCart