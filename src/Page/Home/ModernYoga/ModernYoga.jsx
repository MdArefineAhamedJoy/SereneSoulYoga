import React from 'react';
import img from "../../../assets/hp1-about-image.png"
const ModernYoga = () => {
    return (
        <div className='flex my-36'>
            <section className='w-6/12'>
                <img className='w-full ms-[-15%] h-[600px]' src={img} alt="" />
            </section>
            <section className='w-1/2 flex justify-center flex-col'>
                <p className='text-xl text-[#6fc1ca]'>Our foundation is</p>
                <h2 className='text-5xl font-semibold py-5 text-[#227179]'>Modern Yoga</h2>
                <p className='leading-10 text-lg mb-7 text-justify pe-5 text-neutral-600'>Modern postural yoga consists largely but not exclusively of the practice of asanas. There were very few standing asanas before 1900. By 2012, there were at least 19 widespread styles from Ashtanga Yoga to Viniyoga. These emphasise different aspects including aerobic exercise, precision in the asanas, and spirituality in the Haṭha yoga tradition. For example, Bikram Yoga has an aerobic exercise style with rooms heated to 105 °F</p>
                <div>
                <button className='px-9 py-4 rounded-3xl border-2  border-[#1f636a] text-[#227179]  duration-300 me-5  '>Learn More </button>
                <button  className='px-9 py-4 rounded-3xl  bg-[#227179] text-white hover:bg-[#0f3c42] duration-300 border-2  border-[#1f636a] '>Our Story </button>
                </div>
            </section>
        </div>
    );
};

export default ModernYoga;