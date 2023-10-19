import { StrictMode, useEffect, useState } from 'react';
import { paths } from './pages/paths';
import {MainPage} from "./pages/main";


export const App = () => {

    return ( <StrictMode>
                    <MainPage />
            </StrictMode>);
};