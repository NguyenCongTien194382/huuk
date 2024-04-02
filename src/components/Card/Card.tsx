import React from 'react'
import Image from 'next/image'
import Icon from '@/assets/icons/Icon'


const Card = () => {
    return (
        <div className='px-2 pt-2 pb-4 rounded-3xl hover:shadow-2xl' style={{ boxShadow: '4px 4px 88px 0px rgba(0, 0, 0, 0.08)' }}>
            <div className='rounded-xl overflow-hidden'>
                <Image
                    src='https://s3-alpha-sig.figma.com/img/12a9/6038/6991c9618c90bc7ab555d5923a54e62b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nX9iEpN~ctm~WLa9qODBa-vsCsO-jEMxY3l8uNsLj2wW-Ws~6PmkfP7w93cAo-z7~oxfjfMsn-ICnCBjzrJ2RPiAmOihi7i4H5HYek9KdKaFv-uDHpbeFm-XYg9amMujgF7qpZEa-UvECwCaxWoC-zz9GvlUiDhQSFDC7VItQ4AxASC2ClxXlTNnTV6BD7i7DoG5OjPVL30kKMypKEk2GDB4AOfOAe0VpQWZj1E69Bpj-T2~kt1WlU2eg522vE4ckjuK0NkGbkC1moXdnFpsfu71beYixgug-dQXvoMa6RbnjVJTZRbnKAD9rZbnU74SvDczoYT24waogXElfVJrQA__'
                    width={500}
                    height={500}
                    alt="location"
                    className=''
                />
            </div>
            <div className='my-4'>
                <h3 className='font-semibold left-7 text-xl text-[#19052ff2]'>San Francisco to Los Angeles</h3>
                <div className='text-[#19052f991] text-sm font-normal flex my-1'>
                    <div className='border-r border-[#19052f26] pr-2'>382 miles</div>
                    <div className='pl-2'>15 stops</div>
                </div>
            </div>
            <div className='flex gap-2 text-[#19052f99] text-sm'>
                <div className='bg-[#19052f08] py-[6px] px-2 rounded-[9999px] flex items-center justify-center gap-2'>
                    <div>
                        <Icon name='MuseumIcon' />
                    </div>
                    <label>Nature & Parks</label>
                </div>
                <div className='bg-[#19052f08] py-[6px] px-2 rounded-[9999px] flex items-center justify-center gap-2'>
                    <div>
                        <Icon name='MuseumIcon' />
                    </div>
                    <label>Nature & Parks</label>
                </div>
                <label className='rounded-[9999px] bg-[#19052f08] flex items-center justify-center py-[6px] px-2'>
                    5+
                </label>
            </div>
        </div>
    )
}

export default Card