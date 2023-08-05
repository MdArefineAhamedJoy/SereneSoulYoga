import React from 'react';
import Banner from '../Banner/Banner';
import TopYouga from '../ExtraSection/TopYouga';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import MemberShip from '../MemberShip/MemberShip';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopYouga></TopYouga>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <MemberShip></MemberShip>
        </div>
    );
};

export default Home;