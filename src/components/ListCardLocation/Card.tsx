import React from 'react'
import Icon from '@/assets/icons/Icon'

interface Props {
    urlImage: string;
    name: string;
}

const Card = () => {
    return (
        <div className='p-4 rounded-3xl shadow hover:shadow-xl transition w-full cursor-pointer'>
            <div className='rounded-xl overflow-hidden'>
                <div
                    className='pb-[70%] bg-cover'
                    style={{ backgroundImage: `url('https://s3-alpha-sig.figma.com/img/12a9/6038/6991c9618c90bc7ab555d5923a54e62b?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nX9iEpN~ctm~WLa9qODBa-vsCsO-jEMxY3l8uNsLj2wW-Ws~6PmkfP7w93cAo-z7~oxfjfMsn-ICnCBjzrJ2RPiAmOihi7i4H5HYek9KdKaFv-uDHpbeFm-XYg9amMujgF7qpZEa-UvECwCaxWoC-zz9GvlUiDhQSFDC7VItQ4AxASC2ClxXlTNnTV6BD7i7DoG5OjPVL30kKMypKEk2GDB4AOfOAe0VpQWZj1E69Bpj-T2~kt1WlU2eg522vE4ckjuK0NkGbkC1moXdnFpsfu71beYixgug-dQXvoMa6RbnjVJTZRbnKAD9rZbnU74SvDczoYT24waogXElfVJrQA__')` }}
                >
                </div>
            </div>
            <div className='my-4'>
                <h3 className='font-semibold left-7 text-xl text-[#19052ff2]'>San Francisco to Los Angeles</h3>
                <div className='text-[#19052f99] text-sm font-normal flex my-1'>
                    <div className='border-r border-[#19052f26] pr-2'>382 miles</div>
                    <div className='pl-2'>15 stops</div>
                </div>
            </div>
            <div className='flex flex-wrap flex-1 gap-2 text-[#19052f99] text-sm'>
                <label className='bg-[#19052f08] py-[6px] px-2 rounded-[9999px] flex items-center justify-center gap-2 cursor-pointer'>
                    <div>
                        <Icon name='MuseumIcon' />
                    </div>
                    <span>Nature & Parks</span>
                </label>
                <label className='bg-[#19052f08] py-[6px] px-2 rounded-[9999px] flex items-center justify-center gap-2 cursor-pointer'>
                    <div>
                        <Icon name='MuseumIcon' />
                    </div>
                    <span>Nature & Parks</span>
                </label>
                <label className='rounded-[9999px] bg-[#19052f08] flex items-center justify-center py-[6px] px-2 cursor-pointer'>
                    5+
                </label>
            </div>
        </div>
    )
}

export default Card