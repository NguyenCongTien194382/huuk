import React from 'react'
import Container from '@/layouts/Container/Container'
import DetailInfo from './DetailInfo/DetailInfo'
import Banner from './Banner/Banner'
import ListCardLocation from '@/components/ListCardLocation/ListCardLocation'

const City = () => {
    return (
        <div>
            <DetailInfo />
            <Banner />
            <Container className='pb-20'>
                <ListCardLocation
                    title='EXPLORE MORE'
                    subTitle='Discover Inspiring Roadtrip Ideas '
                />
            </Container>
        </div>
    )
}

export default City