import React from 'react'
import Image from 'next/image'

const FooterAppDownload = () => {
    return (
        <div>
            <div className='hidden md:flex items-center gap-6'>
                <div className='font-semibold text-[#fffffff2] text-base w-[180px]'>
                    Get Huuk App now - Scan QR to Download
                </div>
                <Image
                    src='/assets/images/qrcode.png'
                    width={148}
                    height={148}
                    alt="logo"
                    className='h-[148px] w-[148px]'
                />
            </div>
            <div className='md:hidden'>
                <div className='text-[#fffffff2] text-base font-semibold mb-4 text-center'>Get Huuk App now </div>
                <div className='flex items-center justify-center gap-1'>
                    <Image
                        src="/assets/images/mobile-app-store.png"
                        width={500}
                        height={40}
                        alt="logo"
                        className='w-auto block h-10'
                    />
                    <Image
                        src="/assets/images/mobile-ch-play.png"
                        width={500}
                        height={40}
                        alt="logo"
                        className='w-auto block h-10'
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterAppDownload