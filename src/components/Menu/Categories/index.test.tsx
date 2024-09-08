import {render, screen} from '@testing-library/react'
import { CategoriesInterface } from "../../../utils/interfaces/menuInterface";
import Categories from './index';

const testCategory: CategoriesInterface = {
    id:"1",
    name: 'Burger',
    url:'burger'
}

test('renders the categories name', () => {
    render(<Categories category={testCategory} index={1}/>)
    const heading = screen.getByText(testCategory.name)
    expect(heading).toBeInTheDocument()
})