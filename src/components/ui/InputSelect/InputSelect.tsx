'use client'

import React, { useEffect, useRef, useState } from 'react'
import IconFile from '../IconFile/IconFile'
import getCities from '@/hooks/data/cities/useGetCities'
import { useDebounce } from '@/hooks/useDebounce'

interface Props {
    icon: string;
    label: string;
}

const InputSelect: React.FC<Props> = ({ icon, label }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [value, setValue] = useState('');
    const debouncedSearch = useDebounce(value);

    useEffect(() => {
        handleSearch(debouncedSearch)
    }, [debouncedSearch])

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    const handleChange = async (e: any) => {
        setValue(e.target.value);
    };

    const handleSelect = () => {

    }

    const handleSearch = async (value: string) => {
        console.log('handleSearch')
    }


    return (
        <div
            className='bg-[#19052f08] rounded-2xl outline-none border border-[#19052f0d] px-4 py-3 flex items-center gap-3 cursor-text relative'
        >
            <IconFile name={icon} width={24} height={24} />
            <input
                type="text"
                className='outline-none border-none bg-transparent font-semibold inline-block w-full'
                placeholder={label}
                ref={inputRef}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            />
            {isFocused && value !== '' && (
                <div className='max-h-[324px] bg-white absolute top-14 right-0 left-0 p-6 rounded-2xl shadow-sm border flex justify-center items-center flex-col z-10'>
                    <IconFile name='found-location' width={109} height={109} />
                    <div className='text-[#19052ff2] font-semibold text-xl mt-4 mb-2'>No Results Found</div>
                    <span className='block text-[#19052f99] text-sm text-center'>There are no results for your search. Please try again with a different location.</span>
                </div>
            )}
            {isFocused && value === '' && (
                <div className='max-h-[324px] bg-white absolute top-14 right-0 left-0 overflow-y-auto p-3 rounded-2xl shadow-sm border scrollbar-thumb-[#19052f08] scrollbar-track-white scrollbar-w-1 scrollbar-h-[40px] z-10'>
                    <div className='h-[60px] py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-[#19052f08] hover:rounded-2xl'>
                        <IconFile name='location' width={24} height={24} />
                        <div className=''>
                            <label htmlFor="" className='font-medium block text-[#19052f99]'>New York</label>
                            <span className='text-xs block text-[#19052f99]'>NY, United States</span>
                        </div>
                    </div>
                    <div className='h-[60px] py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-[#19052f08] hover:rounded-2xl'>
                        <IconFile name='location' width={24} height={24} />
                        <div className=''>
                            <label htmlFor="" className='font-medium block text-[#19052f99]'>New York</label>
                            <span className='text-xs block text-[#19052f99]'>NY, United States</span>
                        </div>
                    </div>
                    <div className='h-[60px] py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-[#19052f08] hover:rounded-2xl'>
                        <IconFile name='location' width={24} height={24} />
                        <div className=''>
                            <label htmlFor="" className='font-medium block text-[#19052f99]'>New York</label>
                            <span className='text-xs block text-[#19052f99]'>NY, United States</span>
                        </div>
                    </div>
                    <div className='h-[60px] py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-[#19052f08] hover:rounded-2xl'>
                        <IconFile name='location' width={24} height={24} />
                        <div className=''>
                            <label htmlFor="" className='font-medium block text-[#19052f99]'>New York</label>
                            <span className='text-xs block text-[#19052f99]'>NY, United States</span>
                        </div>
                    </div>
                    <div className='h-[60px] py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-[#19052f08] hover:rounded-2xl'>
                        <IconFile name='location' width={24} height={24} />
                        <div className=''>
                            <label htmlFor="" className='font-medium block text-[#19052f99]'>New York</label>
                            <span className='text-xs block text-[#19052f99]'>NY, United States</span>
                        </div>
                    </div>
                    <div className='h-[60px] py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-[#19052f08] hover:rounded-2xl'>
                        <IconFile name='location' width={24} height={24} />
                        <div className=''>
                            <label htmlFor="" className='font-medium block text-[#19052f99]'>New York</label>
                            <span className='text-xs block text-[#19052f99]'>NY, United States</span>
                        </div>
                    </div>
                    <div className='h-[60px] py-2 px-4 flex items-center gap-3 cursor-pointer hover:bg-[#19052f08] hover:rounded-2xl'>
                        <IconFile name='location' width={24} height={24} />
                        <div className=''>
                            <label htmlFor="" className='font-medium block text-[#19052f99]'>New York</label>
                            <span className='text-xs block text-[#19052f99]'>NY, United States</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default InputSelect