import { IChildren } from '@Interface';
import React from 'react';

const CommonText = (props: IChildren) => {
    return (
        <div className='text-sm font-normal'>
            {props.children}
        </div>
    );
};

export default CommonText;