'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { AutoComplete, Empty, Spin } from 'antd'
import IconFile from '../IconFile/IconFile'
import { useDebounce } from '@/hooks/useDebounce'


interface Props {
    icon: string;
    label: string;
}

const InputSelect: React.FC<Props> = ({ icon, label }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState<string>('')
    const [options, setOptions] = useState<{ value: string }[]>([]);
    // const [options, setOptions] = useState([{ value: 1 }, { value: 2 }, { value: 3 }]);
    const [isFocus, setIsFocus] = useState(false)

    useEffect(() => { inputRef.current?.focus() }, [isFocus])

    const handleContainerClick = () => {
        setIsFocus(true)
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const handleSelect = (value: string) => {
        console.log(value)
    }

    const handleSearch = async (value: string) => {
        const res = await fetch(`http://huuk.site/api/v1/ai/cities?search=${value}`, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            },
            credentials: "include"
        })
        const data = await res.json()
    }

    return (
        // <AutoComplete
        //     className='test'
        //     notFoundContent={<Empty />}
        //     options={options}
        //     allowClear={false}
        //     onSelect={handleSelect}
        //     onSearch={handleSearch}
        // >
        <div
            className='bg-[#19052f08] rounded-2xl outline-none border border-[#19052f0d] px-4 py-3 flex items-center gap-3 cursor-text'
            onClick={handleContainerClick}
        >
            <IconFile name={icon} width={24} height={24} />
            <input
                type="text"
                className='outline-none border-none bg-transparent font-semibold inline-block w-full'
                placeholder={label}
                ref={inputRef}
            />
        </div>
        // </AutoComplete>
    )
}

export default InputSelect