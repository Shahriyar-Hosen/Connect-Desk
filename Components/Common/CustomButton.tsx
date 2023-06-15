import React from 'react';

interface CustomButtonProps {
    height?: string;
    width?: string;
    label?: string;
    padding?: string;
}

const CustomButton = (props: CustomButtonProps, Children: React.ReactNode) => {
    return (
        <div
            className={`
                ${props.width ? `w-[${props.width}]` : "w-[160px]"}
                ${props.height ? `w-[${props.height}]` : "h-[42px] bg-green-500"}
        `}>
            {Children}
        </div>
    );
};

export default CustomButton;