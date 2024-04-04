import React from 'react'
import cn from 'classnames';

interface Props {
    children: React.ReactNode;
    className?: string
}

const Section: React.FC<Props> = ({ children, className }) => {
    const rootClassName = cn(
        'px-4 md:px-[80px]',
        className
    )

    return (
        <div className={rootClassName}>
            {children}
        </div>
    )
}

export default Section