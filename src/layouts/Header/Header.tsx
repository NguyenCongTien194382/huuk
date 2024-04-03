'use client'

import React, { useEffect, useState } from 'react'
import Container from '../Container/Container'
import Logo from '@/components/ui/Logo/Logo'
import Button from '@/components/ui/Button/Button'
import SearchLocation from '@/components/SearchLocation/SearchLocation'
import useScroll from '@/hooks/useScroll'

const Header = () => { 
    const [isHidden, setIsHidden] = useState(false);
    const scrollPosition = useScroll()

    const handleShowSearch = () => {
        const Banner = document.getElementById('banner')
        const Header = document.getElementById('header')
        if (Banner && Header) {
            const obj_banner = Banner.getBoundingClientRect()
            if (scrollPosition.y > obj_banner.height && isHidden === false) {
                setIsHidden(true)
            }
            if (scrollPosition.y < obj_banner.height && isHidden === true) {
                setIsHidden(false)
            }
        }
    }

    useEffect(() => {
        handleShowSearch()
    }, [scrollPosition.y])

    return (
        <div className='border-b border-[#19052f0d] sticky top-0 z-50 bg-white' id='header'>
            <Container>
                <div className='h-[60px] md:h-[88px] flex items-center justify-between'>
                    <div className='h-[32] md:h-[40px]'>
                        <Logo type='header' />
                    </div>
                    <div className='hidden lg:block'>
                        {isHidden && (
                            <SearchLocation />
                        )}
                    </div>
                    <div>
                        <Button className='text-[#19052f99]'>Log In</Button>
                        <Button className='text-[#f13792]'>Sign Up</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Header