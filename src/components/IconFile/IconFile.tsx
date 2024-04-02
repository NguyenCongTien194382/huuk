import { Image } from 'antd'
import React from 'react'

type IconsProps = {
    width?: number
    height?: number
    name: string
}

const IconFile: React.FC<IconsProps> = ({ width = 0, height = 0, name }: IconsProps) => {
    return (
        <>
            <Image
                src={`/assets/icons/${name}.svg`}
                alt={name}
                width={width}
                height={height}
                sizes="100vw"
                preview={false}
                style={{ width: '100%', height: 'auto' }}
            />
        </>
    )
}

export default IconFile
