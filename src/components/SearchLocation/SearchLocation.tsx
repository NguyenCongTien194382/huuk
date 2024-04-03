import React from 'react'
import InputSelect from '../ui/InputSelect/InputSelect'
import IconFile from '../ui/IconFile/IconFile'

const SearchLocation = () => {
    return (
        <div className='flex gap-6 flex-col md:flex-row'>
            <div className='flex md:gap-4 gap-2 flex-col md:flex-row flex-1'>
                <InputSelect
                    icon='location'
                    label='Where are you starting?'
                />
                <InputSelect
                    icon='flag'
                    label='Where are you going?'
                />
            </div>
            <button className="flex justify-center items-center py-2 px-10 bg-[#f13792] text-white rounded-full shadow-md hover:bg-[#e36fa7] ">
                <IconFile name="start-light" width={16} height={16} className='me-2' />
                Go
            </button>
        </div>
    )
}

export default SearchLocation