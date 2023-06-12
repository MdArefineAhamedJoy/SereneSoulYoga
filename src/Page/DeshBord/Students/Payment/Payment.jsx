import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const selectedClass = useLoaderData();
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_pk);
  console.log(selectedClass.price)
  return (
    <div className="w-10/12 mx-auto px-20">
      <Elements stripe={stripePromise}>
        <CheckoutForm selectedClass={selectedClass} />
      </Elements>
    </div>
  );
};

export default Payment;
