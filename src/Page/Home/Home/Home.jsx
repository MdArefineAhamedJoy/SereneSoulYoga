import React from "react";
import Banner from "../Banner/Banner";
import TopYouga from "../ExtraSection/TopYouga";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import MemberShip from "../MemberShip/MemberShip";
import BenefitsYoga from "../BenefitsYoga/BenefitsYoga";
import Information from "../Information/Information ";
import FeedBack from "../FeedBack/FeedBack";
import ModernYoga from "../ModernYoga/ModernYoga";
import YogaBlog from "./YogaBlog/YogaBlog";

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
      <YogaBlog></YogaBlog>
      <FeedBack></FeedBack>
    </div>
  );
};

export default Home;
