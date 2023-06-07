import React, { useEffect, useState } from "react";
import TopYogaCart from "./TopYogaCart";

const TopYouga = () => {
  const [yogas , setYogas] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/topYoga')
    .then(res => res.json())
    .then(data =>{
      console.log(data)
      setYogas(data)
    })
  },[])
  return (
    <div className="mt-24">
      <div className="w-10/12 mx-auto text-center ">
        <h1 style={{ wordSpacing: '2px' , letterSpacing: '6px' }} className=" text-2xl  font-bold"> A BRIEF DESCRIPTION ABOUT THE WAYS OF YOGA</h1>
        <div className="divider w-1/2 mx-auto  border-dotted border-t-2 border-amber-500">OR</div>
        <p className="md:px-32 pt-4" >
          We at KRIYA provide various services to the nature of the clients.
          Wish how you would like to spend the time here we can talk and come to
          a conclusion
        </p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 px-10 pt-10 ">
        {
          yogas.map(yoga => <TopYogaCart yoga={yoga} key={yoga._id}></TopYogaCart>)
        }
      </div>
    </div>
  );
};

export default TopYouga;
