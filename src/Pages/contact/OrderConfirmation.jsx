import React from "react";
import emailjs from '@emailjs/browser';

export default function OrderConfirmation({ customerData, orderDetails }) {
  const sendOrderConfirmation = () => {
    // Prepare the email data
    const emailData = {
      customer_name: customerData.name,
      customer_email: customerData.email,
      order_summary: orderDetails.items
        .map(item => `${item.name} (Qty: ${item.quantity}) - ${item.price}`)
        .join("\n"),
      total_price: orderDetails.totalPrice,
    };

    // Send the email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', emailData, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        console.log('Email sent successfully:', result.text);
      })
      .catch((error) => {
        console.error('Failed to send email:', error.text);
      });
  };

  // Call this function when an order is confirmed, such as after payment processing
  React.useEffect(() => {
    sendOrderConfirmation();
  }, []); // Trigger once after component mounts

  return null; // This component doesn't render anything on the screen
}
