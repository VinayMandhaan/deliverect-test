import { currency } from "../../../utils";
import { Item } from "../../../utils/interfaces/menuInterface"
import Heading from "../../Generic/Heading";
import Image from "../../Generic/Image";
import Paragraph from "../../Generic/Paragraph";
import Price from "../../Price";

interface MenuItemProps {
    item: Item;
    index: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ item, index }) => {

    return (
        <div className="pt-[20px] pb-[20px] border-b border-[#F4F6F9]">
            <div className="flex items-center justify-between">
                <div className={item?.photo ? "w-[235px]" : "w-full"}>
                    <Heading title={item?.name} style="text-[16px]" />
                    <Paragraph title={item?.description} style="text-[#838DA6] text-ellipsis line-clamp-2 overflow-hidden mt-2" />
                    <div className="mt-2">
                        <Price price={item?.price} discountedRate={item?.discount_rate} />
                    </div>
                </div>
                <div>
                    {item?.photo && (
                        <div className="w-[91px]">
                            <Image url={item?.photo} alt="image" style="w-full h-[91px] object-contain rounded-[8px]" />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default MenuItem