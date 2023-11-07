import React from 'react';
type Props = {
    className: string;
}
export const GithubImg = ({ className } : Props) => (
    <svg className={ className } width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="17.5" cy="17.5" r="17.5" fill="#AD343E"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2796 9.03809C13.7909 9.03809 10.1797 12.6493 10.1797 17.138C10.1797 20.7154 12.5084 23.7528 15.7146 24.8328C16.1196 24.9003 16.2546 24.6641 16.2546 24.4278C16.2546 24.2253 16.2546 23.7191 16.2546 23.0441C13.9934 23.5504 13.5209 21.9641 13.5209 21.9641C13.1496 21.0191 12.6096 20.7829 12.6096 20.7829C11.8672 20.2767 12.6771 20.2767 12.6771 20.2767C13.4871 20.3442 13.9259 21.1204 13.9259 21.1204C14.6346 22.3691 15.8158 21.9979 16.2883 21.7954C16.3558 21.2554 16.5583 20.9179 16.7946 20.7154C15.0059 20.5129 13.1159 19.8042 13.1159 16.6992C13.1159 15.8217 13.4196 15.0792 13.9596 14.5392C13.8921 14.3367 13.5884 13.5268 14.0271 12.3793C14.0271 12.3793 14.7021 12.1768 16.2546 13.223C16.8958 13.0543 17.6046 12.953 18.2796 12.953C18.9545 12.953 19.6633 13.0543 20.3045 13.223C21.857 12.1768 22.532 12.3793 22.532 12.3793C22.9707 13.493 22.7007 14.303 22.5995 14.5392C23.1057 15.113 23.4432 15.8217 23.4432 16.6992C23.4432 19.8042 21.5533 20.4791 19.7308 20.6816C20.0345 20.9179 20.2708 21.4241 20.2708 22.1666C20.2708 23.2466 20.2708 24.1241 20.2708 24.3941C20.2708 24.5966 20.4058 24.8666 20.8445 24.7991C24.0507 23.7528 26.3794 20.7154 26.3794 17.138C26.3794 12.6493 22.7682 9.03809 18.2796 9.03809Z" fill="white"/>
    </svg>

);