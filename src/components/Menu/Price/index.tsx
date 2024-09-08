import { currency } from "../../../utils";
import Paragraph from "../../Generic/Paragraph";

interface PriceProps {
    price: number;
    discountedRate: number;
}

const Price: React.FC<PriceProps> = ({ price, discountedRate }) => {

    if (discountedRate > 0) {
        let discountedPrice = price - (price * discountedRate)
        return (
            <div className="flex">
                <Paragraph title={currency + " " + discountedPrice?.toLocaleString()} style="font-semibold mr-[4px]" />
                <Paragraph title={currency + " " + price?.toLocaleString()} style="font-primary line-through text-textGrey ml-[14px]" />
            </div>
        )
    } else {
        return (
            <Paragraph title={currency + " " + price?.toLocaleString()} style="font-semibold" />
        )
    }
}

export default Price