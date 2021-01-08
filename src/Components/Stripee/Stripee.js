import React from 'react';

import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51I5zxRAEk1YEt5Qd9NA3hgThWs37c5m1wFEARaauLHjMx9pkQbW0q5YRRqXMTl8gZgt4HRFc0xUO43ga4Feoskpk00jsBzheUQ');


function Stripeee() {
  return (
    <button role="link">
      Checkout
    </button>
  );
}

export default Stripeee;