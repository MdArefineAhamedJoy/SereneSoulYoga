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
import CalculatorContainer from "./CalculatorContainer/CalculatorContainer";
import HealthService from "./HealthService/HealthService";

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
      <HealthService></HealthService>
      <CalculatorContainer></CalculatorContainer>
      <FeedBack></FeedBack>
    </div>
  );
};

export default Home;
