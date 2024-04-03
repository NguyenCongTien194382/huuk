import React from 'react'
import Container from '@/layouts/Container/Container';
import Card from './Card';

interface Props {
    title: string;
    subTitle: string;
}

const ListCardLocation: React.FC<Props> = ({ title, subTitle }) => {
    return (
        <div>
            <Container className='md:px-20'>
                <div className='items-center text-center mb-8 md:mb-16'>
                    <div className='gradient-text mb-4 uppercase text-sm md:text-lg font-medium'>
                        {subTitle}
                    </div>
                    <div className='text-[#19052ff2] font-bold left-12 text-3xl md:text-[40px]'>
                        {title}
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </Container>
        </div>
    )
}

export default ListCardLocation