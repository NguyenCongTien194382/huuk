import React from 'react'
import Logo from '@/components/ui/Logo/Logo'
import Container from "@/components/layouts/Container";
import FooterAppDownload from "@/components/layouts/Footer/FooterAppDownload";

const Footer = () => {
    return (
        <div className='bg-[#19052F] py-10'>
            <Container className='md:px-20'>
                <div className='flex justify-between items-center flex-col md:flex-row gap-10'>
                    <div className='flex gap-6 flex-col'>
                        <div className='h-[48px] md:h-[64px] flex md:block justify-center'>
                            <Logo type='footer' />
                        </div>
                        <div className='text-[#ffffffb3] text-base font-normal'>Huuk - Your Journey is in Your Hands</div>
                    </div>
                    <FooterAppDownload />
                </div>
            </Container>
        </div>
    )
}

export default Footer