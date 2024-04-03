import Image from 'next/image'
import React from 'react'


type IconsProps = {
    width?: number
    height?: number
    name: string
    className?: string
}

const IconFile: React.FC<IconsProps> = ({ width = 0, height = 0, name, className }: IconsProps) => {
    return (

        <Image
            src={`/assets/icons/${name}.svg`}
            alt={name}
            width={width}
            height={height}
            className={className}
        />
    )
}

export default IconFile
