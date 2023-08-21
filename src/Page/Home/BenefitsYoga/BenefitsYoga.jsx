import React from "react";
import PageTitle from "../../../Components/PageTitle";
import imageUrl from "../../../assets/premium_photo-1669446008800-9a124b0fd3a2.avif";
import { BsCircle } from "react-icons/bs";
const BenefitsYoga = () => {
  const benefits = [
    "Wake up Energized",
    "Find Calm",
    "Build Strength",
    "Sharpen Focus",
    "Sleep Soundly",
    "Increase Flexibility",
    "Improve Mobility",
    "Support Longevity",
    "Live Balanced",
    "Reduce Stress and Anxiety",
    "Enhance Respiratory Health",
    "Boost Immune System",
    "Increase Mindfulness and Awareness",
    "Improve Posture and Alignment",
    "Alleviate Back Pain",
  ];
  return (
    <div>
      <PageTitle
        title={" Beneficial Effects of Yoga for Mind, Body, and Soul "}
        subTitle={
          "For over 5 years we’ve been leading people like you to the best yoga classes and teachers in the world so you can experience the transformational health benefits of yoga."
        }
      ></PageTitle>
      <div className="grid md:grid-cols-2 items-center ">
        <div>
          <img className="w-full h-screen" src={imageUrl} alt="" />
        </div>
        <div className="mx-auto">
            <p className="font-bold text-[#2c4e51] text-3xl mb-5">Benefited of Yoga </p>
          <ul >
            {benefits.map((benefit , index) => (
              <li key={index} className="my-1 text-lg font-semibold flex items-center gap-3"><BsCircle className="h-3 w-3 text-[#225b60]"></BsCircle>  {benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BenefitsYoga;
