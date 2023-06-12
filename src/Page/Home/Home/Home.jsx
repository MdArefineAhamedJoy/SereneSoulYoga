import React from 'react';
import Banner from '../Banner/Banner';
import TopYouga from '../ExtraSection/TopYouga';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import Card from './Card';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopYouga></TopYouga>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
        </div>
    );
};

export default Home;