import { StrictMode, useEffect, useState } from 'react';
import { paths } from './pages/paths';
import {MainPage} from "./pages/main";
import {AboutUsPage} from "./pages/aboutUs";
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import {MenuPage} from "./pages/menuPage";


export const App = () => {

    return ( <StrictMode>
                    <HashRouter>
                        <Routes>
                            <Route path={paths.main} element={<MainPage />} />
                            <Route path={paths.aboutUs} element={<AboutUsPage />} />
                            <Route path={paths.menu} element={<MenuPage />} />
                            <Route path='*' element={<Navigate to={paths.main}/>} />
                        </Routes>
                    </HashRouter>
            </StrictMode>);
};