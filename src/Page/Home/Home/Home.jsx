import React from 'react';
import Banner from '../Banner/Banner';
import TopYouga from '../ExtraSection/TopYouga';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import MemberShip from '../MemberShip/MemberShip';
import BenefitsYoga from '../BenefitsYoga/BenefitsYoga';
import Information from '../Information/Information ';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopYouga></TopYouga>
            <BenefitsYoga></BenefitsYoga>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <MemberShip></MemberShip>
            <Information></Information>
        </div>
    );
};

export default Home;