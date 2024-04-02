import React from 'react'
import Image from 'next/image'

import MuseumIcon from '@/assets/icons/museum.svg'
import SceneIcon from '@/assets/icons/scene.svg'

interface Props {
    name: string;
}

const Icon: React.FC<Props> = ({ name }) => {
    return (
        <Image
            src={MuseumIcon}
            width={18}
            height={18}
            alt="icon"
        />
    )
}

export default Icon