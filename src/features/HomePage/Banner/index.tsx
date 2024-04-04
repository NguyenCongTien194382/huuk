import React from 'react'
import Container from "@/components/layouts/Container";
import SearchLocation from "@/components/SearchLocation";

const Banner = () => {
    return (
        <div className='pt-5 pb-16' id='banner'>
            <Container>
                <div
                    className='w-full p-[5%] md:p-[10%] bg-cover rounded-3xl'
                    style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/0db6/79f9/ad1aeb7fbcc9308bf06927175b8a86dd?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gzPrtLBVGzLNz2RA~IEFY5UxhwHHj-4vsPiiJNu-CoRFQsFnFWuuUvMAfcxpW7HFjKOJkuse49nISuAt23AtSw60kauUDvC~LZyO1Lul4sSxtplCTAt4BWcUod7RTCZQnW4n7dd5w~AZWz7SHwVJBN0LGgb121afxImS~n3C89GfcadVfAc~0R17kneM1GTSGD0VcMAbUvqTteifZuiMk2SfyriLdbV1wPkOZ0tlMH9BBUSzycDghN2F0O8xWNK9aFoTIqHob3QWDNIHxJpVRnkb6E7KzLFR-NcZ8kerKWDyqreK41ESLwzJJOPWlgjCbCibOVFp7jb4Qlo9d2gb9A__')` }}
                >
                    <div className='flex flex-col items-center'>
                        <div className='mb-10'>
                            <div className='font-medium text-sm md:text-lg text-[#fffffff2] text-center pb-4'>WELCOME TO HUUK</div>
                            <div className='font-bold text-3xl md:text-[56px] text-[#fffffff2] md:leading-[64px] text-center'>PERSONALIZE YOUR ADVENTURE BY AI</div>
                        </div>
                        <div className='border border-[#19052f0d] p-5 rounded-3xl bg-white w-full md:w-auto'>
                            <SearchLocation />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner