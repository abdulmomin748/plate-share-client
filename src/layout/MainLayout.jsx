import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { ToastContainer } from 'react-toastify'
const MainLayout = () => {
    
    return (
        <div>
            {/* props drilling for sending data up to bottom like parent to chilred */}
                <Header />
                    <Outlet />
                <Footer />  
                <ToastContainer  autoClose={3000} position="bottom-left"/>

        </div>
    );
};

export default MainLayout;