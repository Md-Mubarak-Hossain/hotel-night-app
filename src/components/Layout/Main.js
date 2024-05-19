import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sharedfolder/Footer/Footer';
import Header from '../../Sharedfolder/Header/Header';
import FooterNew from '../../Sharedfolder/Footer/FooterNew';

const Main = () => {
    return (
        <div>
            <div className='pb-16 text-sm'><Header></Header></div>
            <div className='text-sm py-5'><Outlet></Outlet></div>
            <div className='text-sm'><FooterNew></FooterNew></div>
        </div>
    );
};

export default Main;