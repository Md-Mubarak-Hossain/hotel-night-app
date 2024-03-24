import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sharedfolder/Footer/Footer';
import Header from '../../Sharedfolder/Header/Header';
import FooterNew from '../../Sharedfolder/Footer/FooterNew';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <FooterNew></FooterNew>
        </div>
    );
};

export default Main;