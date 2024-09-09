import { fireEvent, render, screen } from "@testing-library/react"
import MenuItem from "."
import { testData } from "../../../utils/testData"
import { Item } from "../../../utils/interfaces/menuInterface"



test("to test if item is added to cart", () => {
    let cart:Item[] = []
    const addItemToCart = jest.fn()
    render(<MenuItem item={testData.items[1]} index={0} cart={cart} addItemToCart={addItemToCart}/>)
    const heading = screen.getByText("Cheese Burger")
    fireEvent.click(heading)
    expect(addItemToCart).toHaveBeenCalledWith({
        ...testData.items[1]
    })
})


test("to test if item is added to cart and quantity is increased", () => {
    const setCart = jest.fn()
    let cart:Item[] = []
    const addItemToCart = () => {
        setCart([{...testData.items[1], quantity:1}])
    }
    render(<MenuItem item={testData.items[1]} index={0} cart={cart} addItemToCart={addItemToCart}/>)
    const heading = screen.getByText("Cheese Burger")
    fireEvent.click(heading)

    expect(setCart).toHaveBeenCalledWith([{
        ...testData.items[1],
        quantity:1
    }])
})

test("to test if item is already in the cart and quantity is increased", () => {
    const setCart = jest.fn()
    let cart:Item[] = [testData.items[1]]
    const addItemToCart = () => {
        setCart([{...testData.items[1], quantity:2}])
    }
    render(<MenuItem item={testData.items[1]} index={0} cart={cart} addItemToCart={addItemToCart}/>)
    const heading = screen.getByText("Cheese Burger")
    fireEvent.click(heading)

    expect(setCart).toHaveBeenCalledWith([{
        ...testData.items[1],
        quantity:2
    }])
})


test("to test if item is out of stock", () => {
    const setCart = jest.fn()
    global.alert = jest.fn();
    let cart:Item[] = [{
        ...testData.items[1],
        quantity:1
    }]
    const addItemToCart = () => {
        if(cart[0].quantity && cart[0].quantity == cart[0].stock.availability) {
            alert("Item out of stock")
        }   
    }
    render(<MenuItem item={testData.items[1]} index={0} cart={cart} addItemToCart={addItemToCart}/>)
    const heading = screen.getByText("Cheese Burger")
    fireEvent.click(heading)
    expect(global.alert).toHaveBeenCalledWith("Item out of stock")
})