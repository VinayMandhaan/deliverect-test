import { CategoriesInterface } from "../../utils/interfaces/menuInterface"

interface CategoryProps {
    category: CategoriesInterface,
    index:number
}
const Categories: React.FC<CategoryProps> = ({category, index}) => {
    return (
        <div key={index}>
            {category.name}
        </div>
    )
}

export default Categories