import React from 'react';
type Props = {
    className: string;
}
export const TimerImage = ({ className } : Props) => (
    <svg className={className} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="30" height="30" rx="15" fill="#AD343E"/>
        <rect width="15.07" height="15.07" transform="translate(7 7.00015)" fill="#AD343E"/>
        <path d="M14.535 12.0235V14.5352L16.4188 16.4189M20.1863 14.5352C20.1863 17.6563 17.6561 20.1864 14.535 20.1864C11.4139 20.1864 8.88379 17.6563 8.88379 14.5352C8.88379 11.4141 11.4139 8.88391 14.535 8.88391C17.6561 8.88391 20.1863 11.4141 20.1863 14.5352Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>

);