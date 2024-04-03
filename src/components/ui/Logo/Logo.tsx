import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import LogoHeader from '@/assets/images/logo-header.svg'
import LogoFooter from '@/assets/images/logo-footer.svg'

interface Props {
    type: 'header' | 'footer';
    size?: number;
    disabledLink?: boolean;
    url?: string;
}

const Logo: React.FC<Props> = ({
    type,
    disabledLink = false,
    url = '/'
}) => {
    const logo = (
            <Image
                src={type === 'header' ? LogoHeader : LogoFooter}
                width={500}
                height={500}
                alt="logo"
                className='w-auto block'
            />
    )

    if (disabledLink) return logo;
    return (
        <Link
            href={url}
            className='inline-block'
        >
            {logo}
        </Link>
    )
}

export default Logo