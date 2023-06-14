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
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { price , _id } = selectedClass;
  console.log(price)

  useEffect(() => {
    if (price) {
      fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/create-payment-intent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
        })
        .catch((error) => {
          console.log("[clientSecretError]", error);
          setPaymentError("An error occurred while fetching the payment information.");
        });
    }
  }, [price]);

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
      setPaymentError(error.message);
      return;
    }

    try {
      const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.displayName || "unwon",
              email: user?.email || "unwon@example.com",
            },
          },
        }
      );

      if (paymentError) {
        console.log("[paymentError]", paymentError);
        setPaymentError(paymentError.message);
        return;
      }

      if (paymentIntent.status === "succeeded") {
        const classId = selectedClass?.classId;
        const paymentUser = user?.email;
        delete selectedClass._id;
        const paymentClass = {
          ...selectedClass,
          paymentUser,
          transitionId: paymentIntent.id,
        };

        fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/enrollClasses/?id=${_id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(paymentClass),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.error) {
              console.log("[databaseError]", data.error);
              setPaymentError("An error occurred while updating the class.");
            } else {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your payment was successful",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/deashBoard/enroll");

              const updatedAvailableSeat = selectedClass.availableSeat - 1;
              const updatedEnroll = selectedClass.enroll + 1;

              fetch(`https://serene-soul-yoga-server-mdarefineahamedjoy.vercel.app/updateClass/${classId}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  availableSeat: updatedAvailableSeat,
                  enroll: updatedEnroll,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.error) {
                    console.log("[databaseError]", data.error);
                    setPaymentError("An error occurred while updating the class.");
                  } else {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Your payment was successful",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                });
            }
          });
      }
    } catch (error) {
      console.log("[paymentError]", error);
      setPaymentError("An error occurred while processing the payment.");
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
      <button className="btn btn-primary w-1/2" type="submit" disabled={!stripe}>
        Pay
      </button>
      {paymentError && <div>{paymentError}</div>}
    </form>
  );
};

export default CheckoutForm;
