'use client'

import React from 'react'
import { Pagination as PaginationAntd } from 'antd'
import type { PaginationProps } from 'antd';
import IconFile from '../IconFile/IconFile';

interface Props {
    total: number;
}

const Pagination: React.FC<Props> = ({ total }) => {

    const itemRender: PaginationProps['itemRender'] = (page, type, originalElement) => {
        if (type === 'prev') {
            return (
                <div className='w-10 h-10 rounded-[50%] bg-[#19052f0d] flex items-center justify-center hover:bg-[#ccc]'>
                    <IconFile name="caretleft" width={24} height={24} />
                </div>
            )
        }
        if (type === 'next') {
            return (
                <div className='w-10 h-10 rounded-[50%] bg-[#19052f0d] flex items-center justify-center hover:bg-[#ccc]'>
                    <IconFile name="caretright" width={24} height={24} />
                </div>
            )
        }
        if (type === 'page') {
            return (
                <div className='item-pagination w-10 h-10 rounded-[50%] bg-[#19052f0d] flex items-center justify-center hover:bg-[#ccc]'>
                    {page}
                </div>
            )
        }
        if (type === 'jump-prev' || type === 'jump-next') {
            return (
                <div>...</div>
            )
        }

        return originalElement
    }

    return (
        <div className='text-center'>
            <PaginationAntd
                defaultCurrent={1}
                total={total}
                defaultPageSize={15}
                showSizeChanger={false}
                itemRender={itemRender}
                showLessItems={true}
            />
        </div>
    )
}

export default Pagination