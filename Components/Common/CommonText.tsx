import React from 'react';

interface CommonTextProps {
    children: React.ReactNode
}

const CommonText = (props: CommonTextProps) => {
    return (
        <div className='text-sm font-normal'>
            {props.children}
        </div>
    );
};

export default CommonText;