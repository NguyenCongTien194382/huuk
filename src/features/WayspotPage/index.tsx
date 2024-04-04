import React from 'react'
import Index from '@/components/layouts/Container'
import DetailInfo from './DetailInfo/DetailInfo'
import Banner from './Banner/Banner'
import Index from '@/components/ListCardLocation'

const WayspotPage = () => {
    return (
        <div>
            <DetailInfo />
            <Banner />
            <Index className='pb-20'>
                <Index
                    title='EXPLORE MORE'
                    subTitle='Discover Inspiring Roadtrip Ideas '
                />
            </Index>
        </div>
    )
}

export default WayspotPage