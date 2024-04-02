import React from 'react'
import Image from 'next/image'
import Container from '@/layouts/Container/Container'
import InputSelect from '../InputSelect/InputSelect'
import IconFile from '../IconFile/IconFile'

const Banner = () => {
    return (
        <div className='pt-5 pb-16'>
            <Container>
                <div className='relative'>
                    <Image
                        src='https://s3-alpha-sig.figma.com/img/0db6/79f9/ad1aeb7fbcc9308bf06927175b8a86dd?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gzPrtLBVGzLNz2RA~IEFY5UxhwHHj-4vsPiiJNu-CoRFQsFnFWuuUvMAfcxpW7HFjKOJkuse49nISuAt23AtSw60kauUDvC~LZyO1Lul4sSxtplCTAt4BWcUod7RTCZQnW4n7dd5w~AZWz7SHwVJBN0LGgb121afxImS~n3C89GfcadVfAc~0R17kneM1GTSGD0VcMAbUvqTteifZuiMk2SfyriLdbV1wPkOZ0tlMH9BBUSzycDghN2F0O8xWNK9aFoTIqHob3QWDNIHxJpVRnkb6E7KzLFR-NcZ8kerKWDyqreK41ESLwzJJOPWlgjCbCibOVFp7jb4Qlo9d2gb9A__'
                        width={5000}
                        height={528}
                        alt="banner"
                        className='w-full h-[528px] object-cover rounded-3xl'
                    />
                    <div className='absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2'>
                        <div className='mb-10'>
                            <div className='font-medium text-sm md:text-lg text-[#fffffff2] text-center pb-4'>WELCOME TO HUUK</div>
                            <div className='font-bold text-3xl md:text-[56px] text-[#fffffff2] md:leading-[64px] text-center'>PERSONALIZE YOUR ADVENTURE BY AI</div>
                        </div>
                        <div className='border border-[#19052f0d] p-5 rounded-3xl bg-white'>
                            <div className='md:h-16 w-full flex gap-6 flex-col md:flex-row'>
                                <div className='flex md:gap-4 gap-2 flex-col md:flex-row'>
                                    <InputSelect />
                                    <InputSelect />
                                </div>
                                <button
                                    className='rounded-[99px] py-4 pr-6 pl-5 bg-[#f13792] flex items-center justify-center gap-1 min-w-[163px] hover:opacity-80'
                                >
                                    <IconFile name="start-light" width={24} height={24} />
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner