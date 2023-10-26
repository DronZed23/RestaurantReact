import React from 'react';
type Props = {
    className: string;
}
export const FacebookImg = ({ className } : Props) => (
    <svg className={className} width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="17.5" r="17.5" fill="#AD343E"/>
        <path d="M15.883 25.3846V18.4427H13.5469V15.7373H15.883V13.7421C15.883 11.4268 17.2971 10.166 19.3626 10.166C20.352 10.166 21.2023 10.2397 21.4501 10.2726V12.6923L20.0176 12.6929C18.8943 12.6929 18.6768 13.2267 18.6768 14.01V15.7373H21.3558L21.007 18.4427H18.6768V25.3846H15.883Z" fill="white"/>
    </svg>
);