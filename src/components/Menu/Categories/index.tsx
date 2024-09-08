import { CategoriesInterface } from "../../../utils/interfaces/menuInterface"
import Heading from "../../Generic/Heading"

interface CategoryProps {
    category: CategoriesInterface,
    index:number
}
const Categories: React.FC<CategoryProps> = ({category, index}) => {
    return (
        <div className="mt-[28px]" key={index}>
            <Heading title={category.name} style="text-[26px]"/>
        </div>
    )
}

export default Categories