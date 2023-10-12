import React, { useState } from "react";

const CalculatorContainer = () => {
  const [countBMI, setCountBMI] = useState("");
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [weight, setWeight] = useState(0);

  function calculateBMI() {
    if (feet > 0 && inches > 0 && weight > 0) {
      const feetToInches = parseInt(inches) * parseFloat(0.083333);
      const totalFeet = parseInt(feet) + feetToInches;
      const covertMeter = totalFeet * 0.3048;
      const weightInKg = parseFloat(weight);
      const meter = covertMeter * covertMeter;
      const calculateBmi = weightInKg / meter;
      setCountBMI(calculateBmi.toFixed(2));
    }
  }
  return (
    <div className="flex  my-40 bg-slate-100 mx-10 justify-center py-32  rounded-sm  ">
      <div className="w-4/12">
        <p className="text-[#227179]">Compute BMI</p>
        <h3 className="text-3xl font-semibold pt-2">
          Calculate Your Body Mass Index
        </h3>
      </div>
      <div className="w-7/12  pt-8">
        <div className="flex items-center gap-12">
          <form>
            <input
              placeholder="FT"
              type="text"
              onChange={(e) => setFeet(e.target.value)}
              className="mx-2 focus:outline-none border-2 text-center font-semibold rounded border-[#227179]  p-2 py-4  w-20 "
            />
            <input
              type="text"
              placeholder="IN"
              onChange={(e) => setInches(e.target.value)}
              className="mx-2 focus:outline-none border-2 text-center font-semibold rounded border-[#227179]  p-2 py-4  w-20 "
            />
            <p className="ms-2 font-semibold ">Wight</p>
          </form>
          <div>
            <from className="flex ga-5">
              <input
                name="lbm"
                placeholder="LBW"
                type="text"
                onChange={(e) => setWeight(e.target.value)}
                className=" focus:outline-none border-2 rounded border-[#227179] font-semibold px-5 py-4 "
              />

              <button
                onClick={() => calculateBMI()}
                className="px-16  py-2   bg-[#227179] text-white rounded ms-5"
                type="submit"
              >
                {" "}
                Calculate
              </button>
            </from>
            <p className="font-semibold">Hight</p>
          </div>
        </div>
        {countBMI && (
          <div className="py-10 mt-10 w-full bg-[#227179] text-white flex justify-center ">
            <div>
              <p className="text-2xl">Your BMI is : {countBMI} </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CalculatorContainer;
