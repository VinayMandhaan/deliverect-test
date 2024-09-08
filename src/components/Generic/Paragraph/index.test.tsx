import { render, screen } from "@testing-library/react"
import Paragraph from "."

test("to test paragraph render", () => {
    render(<Paragraph title={'Title'} />)
    const heading = screen.getByText('Title')
    expect(heading).toBeInTheDocument()
})