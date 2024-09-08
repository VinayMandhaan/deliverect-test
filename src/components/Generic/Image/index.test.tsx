import { render, screen } from "@testing-library/react"
import Image from "."


test('renders the categories name', () => {
    const imageUrl = "www.google.com"
    const alt = 'test-image'
    render(<Image url={imageUrl} alt={alt}/>)
    const imageElement = screen.getByRole('img')
    expect(imageElement).toBeInTheDocument()
    expect(imageElement).toHaveAttribute('src', imageUrl)
    expect(imageElement).toHaveAttribute('alt', alt)
})