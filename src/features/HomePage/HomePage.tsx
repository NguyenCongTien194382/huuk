import React from 'react'
import Banner from './Banner/Banner'
import ListCardLocation from '@/components/ListCardLocation/ListCardLocation'
import Pagination from '@/components/ui/Pagination/Pagination'
import { AutoComplete } from 'antd'

const HomePage = () => {
    return (
        <div>
            <Banner />
            <ListCardLocation
                title="Highly Recommended Roadtrips"
                subTitle="INSPIRATION"
            />
            <div className="mt-8 mb-10 md:mt-16 md:mb-20">
                <Pagination total={1000} />
            </div>
        </div>
    )
}

export default HomePage