import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IDOAKGiIZAh7dE9A45LciPIguET8R0XsJ511YaDneqS7yHKUrlVWwUGl3RJ8Dd8NgaoxFbSezlMm3VWdI74Ppie006nT5tJ3g';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      panelLabel='Pay Now'
      token={onToken}
      amount={priceForStripe}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
