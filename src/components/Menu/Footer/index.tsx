import { Item } from "../../../utils/interfaces/menuInterface"
import Heading from "../../Generic/Heading"
import { getDiscountedPrice } from "../../../utils"

interface FooterProps {
    cart: Item[]
}

const Footer: React.FC<FooterProps> = ({ cart }) => {

    const getPrice = () => {
        return cart?.reduce((total, current) => total + (getDiscountedPrice(current.price, current.discount_rate) * (current.quantity || 0)), 0)
    }

    if (getPrice() > 0) {
        return (
            <div className="w-full shadow-md border border-menuBorder sticky bottom-0 bg-white pt-2 pb-2 items-center justify-center flex rounded-[4px]">
                <Heading title={"AED" + " " + getPrice()?.toLocaleString()} />
            </div>
        )
    }
    return null
}

export default Footer