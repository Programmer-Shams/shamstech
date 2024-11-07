// components/CheckoutButton.js
'use client';
import React, { useEffect, useState } from 'react';

let PaystackButton;
if (typeof window !== "undefined") {
    PaystackButton = require("react-paystack").PaystackButton;
}

const CheckoutButton = ({ amount }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) return null; // Prevent rendering on the server

    const publicKey = "pk_live_fb34e03009201a70ba5c33d322374e6adcace225";
    const email = "customer@example.com";
    const reference = `ref-${Math.floor(Math.random() * 1000000000 + 1)}`;

    const onSuccess = (response) => {
        alert("Payment Successful!");
        console.log(response);
    };

    const onClose = () => {
        alert("Payment window closed.");
    };

    const componentProps = {
        email,
        amount,
        publicKey,
        text: "Pay Now",
        onSuccess,
        onClose,
        reference,
        currency: "NGN",
    };

    return <PaystackButton {...componentProps} />;
};

export default CheckoutButton;
