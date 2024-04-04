import React from "react";

type SubHeadingProps = {
    subTitle: string,
    title: string,
}

const SubHeading = ({title,subTitle}:SubHeadingProps)=>{
    return (
        <>
            <div className='items-center text-center mb-8 md:mb-16'>
                <div className='gradient-text mb-4 uppercase text-sm md:text-lg font-medium'>
                    {subTitle}
                </div>
                <div className='text-[#19052ff2] font-bold left-12 text-3xl md:text-[40px]'>
                    {title}
                </div>
            </div>
        </>
    )
}


export default SubHeading