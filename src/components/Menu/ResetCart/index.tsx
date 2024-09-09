import useCart from "../../../hooks/cart"
import Image from "../../Generic/Image"
import BackIcon from '../../../assets/images/back.svg'


interface ResetCartProps {
    resetCart: () => void;
}

const ResetCart: React.FC<ResetCartProps> = ({ resetCart }) => {
    return (
        <div onClick={() => {
            resetCart()
        }} className="mb-[20px]">
            <Image url={BackIcon} alt="back-icon" style="w-[40px] h-[40px] cursor-pointer" />
        </div>
    )
}

export default ResetCart