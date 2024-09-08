
interface HeadingProps {
    title: string;
    style?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, style }) => {
    return (
        <p className={`font-semibold text-heading ${style ? style : ""}`}>{title}</p>
    )
}

export default Heading