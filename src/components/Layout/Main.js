import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sharedfolder/Footer/Footer';
import Header from '../../Sharedfolder/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;