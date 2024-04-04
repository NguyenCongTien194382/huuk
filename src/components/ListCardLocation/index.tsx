import React from 'react'
import SubHeading from "@/components/SubHeading";
import CardLocation from "@/components/CardLocation";

interface Props {
    title: string;
    subTitle: string;
}

const ListCardLocation: React.FC<Props> = ({title, subTitle}) => {
    return (
        <div className='md:px-20'>
            <SubHeading subTitle={subTitle} title={title}/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center'>
                <CardLocation/>
                <CardLocation/>
                <CardLocation/>
                <CardLocation/>
                <CardLocation/>
            </div>
        </div>
    )
}

export default ListCardLocation