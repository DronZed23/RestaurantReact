import React from 'react';
type Props = {
    className: string;
}
export const CofeePicture = ({ className } : Props) => (
    <svg className={className} width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.07" cx="50" cy="50" r="50" fill="#4D592B"/>
        <g clip-path="url(#clip0_0_1213)">
            <path d="M46 28V35" stroke="#474747" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M36 30V37" stroke="#474747" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M56 30V37" stroke="#474747" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M63 48H71V56C71 58.209 69.209 60 67 60H63" stroke="#474747" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M51 72H41C34.373 72 29 66.627 29 60V44H63V60C63 66.627 57.627 72 51 72Z" stroke="#474747" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M54 52H44V62H54V52Z" stroke="#474747" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M49 44V52" stroke="#474747" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
            <clipPath id="clip0_0_1213">
                <rect width="48" height="50" fill="white" transform="translate(26 25)"/>
            </clipPath>
        </defs>
    </svg>
);