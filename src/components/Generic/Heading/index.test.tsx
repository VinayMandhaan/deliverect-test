import { render, screen } from "@testing-library/react"
import Heading from "."


test('renders the categories name', () => {
    render(<Heading title={'Search'} />)
    const heading = screen.getByText('Search')
    expect(heading).toBeInTheDocument()
})