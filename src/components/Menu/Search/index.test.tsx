import { fireEvent, render, screen } from "@testing-library/react"
import Search from "."
import MenuProvider, { MenuContext } from "../../../store"
import { ReactNode, useContext } from "react"
import { testData } from "../../../utils/testData"


const setFilteredData = jest.fn()
const renderContext = (children:ReactNode) => {
    return render(
        <MenuContext.Provider value={{ menuData: testData, filteredData:testData, setFilteredData}}>
            {children}
        </MenuContext.Provider>
    )
}

test("to test if seach render", () => {
    render(<Search/>)
    const inputElement = screen.getByPlaceholderText("Search for dishes...")
    expect(inputElement).toBeInTheDocument()
})


test("to test if search return results", () => {
    renderContext(<Search/>)
    const searchValue = "Chicken"
    const inputElement = screen.getByPlaceholderText("Search for dishes...")
    fireEvent.change(inputElement, {target: {value: searchValue}})
    expect(setFilteredData).toHaveBeenCalledWith({
        categories:[testData.categories[0]],
        items:[testData.items[0]]
    })
})

test("to test if search return empty", () => {
    renderContext(<Search/>)
    const searchValue = "Apple"
    const inputElement = screen.getByPlaceholderText("Search for dishes...")
    fireEvent.change(inputElement, {target: {value: searchValue}})
    expect(setFilteredData).toHaveBeenCalledWith({
        categories:[],
        items:[]
    })
})