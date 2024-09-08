
interface HeadingProps {
    title: string | number;
    style?: string | null;
}

const Heading: React.FC<HeadingProps> = ({ title, style }) => {
    return (
        <p className={`font-semibold text-heading ${style || ""}`}>{title}</p>
    )
}

export default Heading