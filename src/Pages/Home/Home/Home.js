import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import MainOffer from '../MainOffer/MainOffer';
import OverView from '../OverView/OverView';

const Home = () => {
    return (
        <div className="mt-5">
            <Banner></Banner>
            <MainOffer></MainOffer>
            <OverView></OverView>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;