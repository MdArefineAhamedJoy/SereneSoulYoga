import React from 'react';
import Banner from '../Banner/Banner';
import TopYouga from '../ExtraSection/TopYouga';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstructor from '../PopularInstructor/PopularInstructor';
import MemberShip from '../MemberShip/MemberShip';
import BenefitsYoga from '../BenefitsYoga/BenefitsYoga';
import Information from '../Information/Information ';
import YogaExperienceSection from '../YogExpreance/YogaExperienceSection';
import FeedBack from '../FeedBack/FeedBack';
import ModernYoga from '../ModernYoga/ModernYoga';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopYouga></TopYouga>
            <BenefitsYoga></BenefitsYoga>
            <PopularClass></PopularClass>
            <ModernYoga></ModernYoga>
            <PopularInstructor></PopularInstructor>
            <Information></Information>
            <YogaExperienceSection></YogaExperienceSection>
            <FeedBack></FeedBack>
        </div>
    );
};

export default Home;