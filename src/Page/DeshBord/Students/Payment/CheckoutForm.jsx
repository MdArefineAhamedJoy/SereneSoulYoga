import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./CheckoutForm.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ selectedClass }) => {
  const { user } = useContext(AuthContext);
  const [paymentError, setPaymentError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate()
  const stripe = useStripe();
  const elements = useElements();
  const { price } = selectedClass;


  useEffect(() => {
    if (price) {
      fetch(`http://localhost:5000/create-payment-intent`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.clientSecret);
          setClientSecret(data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      //   console.log("[PaymentMethod]", paymentMethod);
    }

    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unwon",
            email: user?.email || "unwon@email.com",
          },
        },
      });
    if (paymentError) {
      console.log("[paymentError]", paymentError);
      setPaymentError(paymentError?.message);
    } else {
        
      if (paymentIntent.status === "succeeded") {
        // TODO : Class id remove and new id set
        const classId = selectedClass._id
        delete selectedClass._id
        console.log(selectedClass)
        const paymentClass = {
          ...selectedClass,classId,
          transitionId: paymentIntent.id,
        };
        fetch(`http://localhost:5000/enrollClasses`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(paymentClass),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You Payment SuccessFull',
                showConfirmButton: false,
                timer: 1500
              })
              navigate('/deashBoard/enroll')
          });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-primary w-1/2"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;
