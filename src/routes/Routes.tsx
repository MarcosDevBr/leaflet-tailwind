import React from 'react';
import tw from 'tailwind-styled-components'

import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Home from '../pages/home';
import paths from './paths';
import Config from '../pages/config';
import { light } from '../styles/theme';

const MainRoutes = () => (
    <Container bgColor={light.SYSTEM_BACKGROUND}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path={paths.settings.root} element={<Config />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Container>
);

export default MainRoutes;

const Container = tw.div<{ bgColor: string }>`  
    flex
    flex-col
    w-full
    h-full
    overflow-hidden
    ${props => `bg-${props.bgColor}`}
`;
