
import React from 'react'

interface ParagraphProps {
    title: string | number;
    style?: string
}

const Paragraph: React.FC<ParagraphProps> = ({ title, style }) => {
    return (
        <p className={`font-primary text-[14px] ${style ? style : ""}`}>{title}</p>
    )
}

export default Paragraph