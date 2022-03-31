import React from 'react'

interface ButtonTextProps {
    onClick: any;
    type: any;
    value: any;
}

export const ButtonText: React.FC<ButtonTextProps> = ({onClick, type, value}) => {
        return (
            <div className='btn-parent'>
                <button type={type} className='primary-mv-btn' onClick={onClick}>{value}</button>
            </div>
        );
}