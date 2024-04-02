'use client'

import React from 'react'
import cn from 'classnames';

interface Props {
    children: React.ReactNode;
    className?: string
}

const Container: React.FC<Props> = ({ children, className }) => {
    const rootClassName = cn(
        'px-4 md:px-8',
        className
    )

    return (
        <div className={rootClassName}>
            {children}
        </div>
    )
}

export default Container