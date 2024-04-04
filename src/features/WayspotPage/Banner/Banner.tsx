import React from 'react'
import Image from 'next/image'
import Index from '@/components/layouts/Section'

const Banner = () => {
    return (
        <Index className='mb-[80px]'>
            <div className='bg-[#19052F] rounded-3xl flex p-5 lg:px-20 lg:py-12 gap-3 flex-col lg:flex-row'>
                <div className=''>
                    <div>
                        <h3 className='font-bold text-3xl lg:text-[40px] text-[#fffffff2]'>Explore more with <span className='text-[#F13792]'>Huuk App</span></h3>
                        <p className='text-[#ffffffb3] my-6 lg:mb-10 text-sm lg:text-base'>Download now to discover inspiring destinations, plan your next adventure, and create unforgettable memories on the road.</p>
                    </div>
                    <div className='hidden lg:flex gap-3'>
                        <div className='flex justify-between flex-col'>
                            <Image
                                src="/assets/images/mobile-app-store.png"
                                width={500}
                                height={60}
                                alt="logo"
                                className='w-auto block'
                            />
                            <Image
                                src="/assets/images/mobile-ch-play.png"
                                width={500}
                                height={60}
                                alt="logo"
                                className='w-auto block'
                            />
                        </div>
                        <Image
                            src='/assets/images/qrcode.png'
                            width={148}
                            height={148}
                            alt="logo"
                            className=''
                        />
                    </div>
                    <div className='flex lg:hidden gap-4'>
                        <Image
                            src="/assets/images/mobile-app-store-small.png"
                            width={500}
                            height={40}
                            alt="logo"
                            className='w-auto block'
                        />
                        <Image
                            src="/assets/images/mobile-ch-play-small.png"
                            width={500}
                            height={40}
                            alt="logo"
                            className='w-auto block'
                        />
                    </div>
                </div>
                <Image
                    src="/assets/images/banner-mobile.svg"
                    width={553}
                    height={336}
                    alt="banner"
                    className='block w-full h-auto'
                // className='block object-cover w-full h-full'
                />
            </div>
        </Index>
    )
}

export default Banner