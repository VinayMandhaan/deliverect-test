import { render, screen } from "@testing-library/react"
import Menu from "."
import { ReactNode } from "react"
import { MenuContext } from "../../store"
import { testData } from "../../utils/testData"


const setFilteredData = jest.fn()
const renderContext = (children:ReactNode) => {
    return render(
        <MenuContext.Provider value={{ menuData: testData, filteredData:testData, setFilteredData}}>
            {children}
        </MenuContext.Provider>
    )
} 


test("to test search heading", () => {
    render(<Menu/>)
    const search = screen.getByText("Search")
    expect(search).toBeInTheDocument()
})


test("to test category", () => {
    renderContext(<Menu/>)
    const search = screen.getByText("Burgers")
    expect(search).toBeInTheDocument()
})


test("to test item", () => {
    renderContext(<Menu/>)
    const search = screen.getByText("Cheese Burger")
    expect(search).toBeInTheDocument()
})