import React from 'react';

const ComponentHeader = ({ children, position }: { children: React.ReactNode, position: string, }) => {
    return (
        <div className={`text-xl font-semibold text-${position}`}>
            {children}
            <div className={`w-full flex pt-2.5 justify-${position}`}>
                <div className='w-[159px] h-[4px] opacity-60 bg-primary '>
                </div>
            </div>
        </div>
    );
};

export default ComponentHeader;