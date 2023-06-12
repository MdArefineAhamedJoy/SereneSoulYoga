import React, { useEffect, useState } from "react";
import TopYogaCart from "./TopYogaCart";
import PageTitle from "../../../Components/PageTitle";

const TopYouga = () => {
  const [yogas, setYogas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/topYoga")
      .then((res) => res.json())
      .then((data) => {
        setYogas(data);
      });
  }, []);
  return (
    <div >
      <div >
        <PageTitle
          title="A BRIEF DESCRIPTION ABOUT THE WAYS OF YOGA"
          subTitle=" We at KRIYA provide various services to the nature of the clients.
          Wish how you would like to spend the time here we can talk and come to
          a conclusion"
        ></PageTitle>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-5 px-10 ">
        {yogas.map((yoga) => (
          <TopYogaCart yoga={yoga} key={yoga._id}></TopYogaCart>
        ))}
      </div>
    </div>
  );
};

export default TopYouga;
