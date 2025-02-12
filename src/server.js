const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const stripe = require('stripe')("sk_test_51QKYz2ENFjtQ91D8aJqI0EiNsqOL3VaS1CZAqKvqAaiMEPqJqSMwoev8BpErgprgKDd0ZO1XMDEfebQypef5zl9I007L27fqiL"); // Use the secret key from .env

dotenv.config();

const app = express();
const port = 3001; // or any port you prefer

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(express.json());

// Create a Stripe Checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr', // Adjust to your currency
            product_data: {
              name: 'Premium Plan',
            },
            unit_amount: 100000, // Amount in paise (1000 INR = 100000 paise)
          },
          quantity: 1,
        },
      ],
      mode: 'payment', // 'payment' for one-time payments
      success_url: 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://localhost:3000/cancel',
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
