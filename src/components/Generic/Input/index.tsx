

interface InputProps {
    placeholder: string;
    value: string;
    type: string;
    handleChange: (text: string) => void;
    style?: string;
    leftIcon?: any;
    rightIcon?: any;
}

const Input: React.FC<InputProps> = ({ placeholder, value, type, style, handleChange, leftIcon, rightIcon }) => {
    return (
        <div className='flex items-center w-full h-[48px] text-[14px] border-[2px] border-inputBorder rounded-[8px] pl-[14px]'>
            {leftIcon && leftIcon}
            <input
                value={value}
                className='font-primary w-[95%] h-full outline-none mr-[4px]'
                placeholder={placeholder}
                type={type}
                onChange={(e) => handleChange(e.target.value)}
            />
            {rightIcon && rightIcon}
        </div>
    )
}

export default Input