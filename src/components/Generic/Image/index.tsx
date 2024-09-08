

import React from 'react'

interface ImageProps {
    url: string;
    alt: string;
    style?: string;
}

const Image: React.FC<ImageProps> = ({ url, alt, style }) => {
    return (
        <img
            className={style}
            src={url}
            alt={alt}
        />
    )
}

export default Image