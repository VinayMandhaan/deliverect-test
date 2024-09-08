import { fireEvent, render, screen } from "@testing-library/react"
import Input from "."


test("to test the input changes and the attributes", () => {
    const placeholder = "search"
    const value = "user"
    const type = "text"
    const handleChange = () => { }
    render(<Input placeholder={placeholder} value={value} type={type} handleChange={handleChange} />)
    const inputElement = screen.getByPlaceholderText('search')
    fireEvent.change(inputElement, { target: { value: value } })
    expect(inputElement).toHaveValue(value)
    expect(inputElement).toHaveAttribute('placeholder', placeholder)
    expect(inputElement).toHaveAttribute('type', type)
})