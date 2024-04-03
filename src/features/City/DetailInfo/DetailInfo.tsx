import React from 'react'
import Section from '@/layouts/Section/Section'
import Overview from './Overview/Overview'
import Checklist from './Checklist/Checklist'
import Hashtag from './Hashtag/Hashtag'
import Rate from './Rate/Rate'

const DetailInfo = () => {
    return (
        <Section className='pb-16 pt-6 grid gap-6 grid-cols-3'>
            <div className='col-span-2'>
                <Overview />
            </div>
            <div className='col-span-1'>
                <Checklist />
            </div>
            <div className='col-span-2'>
                <Rate />
            </div>
            <div className='col-span-1'>
                <Hashtag />
            </div>
        </Section>
    )
}

export default DetailInfo