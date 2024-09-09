import { Item } from "../../../utils/interfaces/menuInterface"
import Heading from "../../Generic/Heading"
import BasketImage from '../../../assets/images/basket.png'
import Image from "../../Generic/Image"

interface BasketProps {
    cart: Item[]
}

const Basket: React.FC<BasketProps> = ({ cart }) => {
    return (
        <div className="flex items-center justify-center w-[50px] h-[36px] relative">
            <div className="absolute top-0 right-0">
                <Heading title={cart?.reduce((value, current) => Number(value) + Number(current.quantity), 0)} style={'text-[12px]'} />
            </div>
            <Image url={BasketImage} alt="basket-icon" style="w-[20px] h-[20px]" />
        </div>
    )
}

export default Basket