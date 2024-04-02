'use client'

import React, { ButtonHTMLAttributes, JSXElementConstructor } from 'react'
import cn from 'classnames';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string
    className?: string
    active?: boolean
    type?: 'submit' | 'reset' | 'button'
    Component?: string | JSXElementConstructor<any>
    disabled?: boolean
}

const Button: React.FC<Props> = (props) => {
    const {
        className,
        children,
        active,
        onClick,
        Component = 'button',
        disabled = false,
    } = props

    const rootClassName = cn(
        'px-3 py-4 bg-white font-medium leading-6 hover:opacity-70',
        className
    )

    return (
        <Component
            aria-pressed={active}
            className={rootClassName}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </Component>
    )
}

export default Button