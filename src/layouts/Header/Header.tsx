import React from 'react'
import Image from 'next/image'
import Container from '../Container/Container'
import Logo from '@/components/Logo/Logo'
import Button from '@/components/Button/Button'

const Header = () => {
    return (
        <div className='border-b border-[#19052f0d] sticky top-0 z-50 bg-white'>
            <Container>
                <div className='h-[60px] md:h-[88px] flex items-center justify-between'>
                    <div className='h-[32] md:h-[40px]'>
                        <Logo type='header' />
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