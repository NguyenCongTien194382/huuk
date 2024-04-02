"use client"

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { AutoComplete } from 'antd'

import LocationIcon from '@/assets/icons/location.svg'

const InputSelect = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [options, setOptions] = useState([{ value: 1 }, { value: 2 }, { value: 3 }]);

    const handleContainerClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className='relative min-w-[348.5px]'>
            <div
                className='bg-[#19052f08] rounded-2xl outline-none border border-[#19052f0d] px-4 flex items-center gap-3 h-full cursor-text'
                onClick={handleContainerClick}
            >
                <div>
                    <Image
                        src={LocationIcon}
                        width={24}
                        height={24}
                        alt="Picture of the author"
                    />
                </div>
                <div>
                    <div className='font-medium text-[#19052f99]'>Where are you starting?</div>
                    {/* <div>
                        <div className='font-medium text-[#19052f99] text-xs'>Where are you starting?</div>
                        <input
                            type="text"
                            className='outline-none border-none bg-transparent font-semibold'
                            ref={inputRef}
                        />
                    </div> */}
                </div>
            </div>
        </div>
        // <div className='relative min-w-[348.5px]'>
        //     <div
        //         className='bg-[#19052f08] rounded-2xl outline-none border border-[#19052f0d] px-4 flex items-center gap-3 h-full cursor-text'
        //         onClick={handleContainerClick}
        //     >
        //         <div>
        //             <Image
        //                 src={LocationIcon}
        //                 width={24}
        //                 height={24}
        //                 alt="Picture of the author"
        //             />
        //         </div>
        //         <div>
        //             <div className='font-medium text-[#19052f99]'>Where are you starting?</div>
        //             {/* <div>
        //                 <div className='font-medium text-[#19052f99] text-xs'>Where are you starting?</div>
        //                 <input
        //                     type="text"
        //                     className='outline-none border-none bg-transparent font-semibold'
        //                     ref={inputRef}
        //                 />
        //             </div> */}
        //         </div>
        //     </div>
        // </div>
        // <AutoComplete
        //     className='test'
        //     options={options}
        //     style={{
        //         width: 200,
        //     }}
        //     allowClear={false}
        // >
        //     <div className='relative min-w-[348.5px]'>
        //         <div
        //             className='bg-[#19052f08] rounded-2xl outline-none border border-[#19052f0d] px-4 flex items-center gap-3 h-full cursor-text'
        //             onClick={handleContainerClick}
        //         >
        //             <div>
        //                 <Image
        //                     src={LocationIcon}
        //                     width={24}
        //                     height={24}
        //                     alt="Picture of the author"
        //                 />
        //             </div>
        //             <div>
        //                 <div className='font-medium text-[#19052f99]'>Where are you starting?</div>
        //                 {/* <div>
        //                 <div className='font-medium text-[#19052f99] text-xs'>Where are you starting?</div>
        //                 <input
        //                     type="text"
        //                     className='outline-none border-none bg-transparent font-semibold'
        //                     ref={inputRef}
        //                 />
        //             </div> */}
        //             </div>
        //         </div>
        //     </div>
        // </AutoComplete>
    )
}

export default InputSelect