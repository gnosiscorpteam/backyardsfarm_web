import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./StripePayment.css";
import axios from "axios";
import CheckoutForm from "./checkoutForm";
import { API_BASIC_URL } from "../../contact/config";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_live_51NyGlvKPJtLW187D2orj9uTdnPLnXYldJGm3UmA5VTxxaUQ9z2xU7e7AA3KVSwPsYGVmK0Aw6eLdhPsd0c5ubz3K00UmI1rkqo");

export default function StripePayment({amount, customerInfo}) {
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios.post(`${API_BASIC_URL}/create-payment-intent`, {
        amount: amount
      })
      .then((res) => setClientSecret(res.data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      {(clientSecret) && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm amount={amount} customerInfo={customerInfo} />
        </Elements>
      )}
    </div>
  );
}