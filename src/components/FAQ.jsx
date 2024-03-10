import React from 'react'

import Accordion from "../components/Accordion"

const FAQ = () => {
  return (
    <div className="my-20" id='faqs'>
      <h3 className="text-2xl font-semibold my-3">Frequently Asked Questions</h3>
      <div className="mt-8 text-start grid gap-2 lg:mt-10">
        <Accordion
          title='1. What is the purpose of this e-commerce web app?'
          answer='"This e-commerce web app is designed to facilitate 
          online buying and selling of goods or services"'
        />
        <Accordion
          title="2. How secure is my personal information on this platform?"
          answer='"We take the security and privacy of our users very seriously. 
          Our platform employs robust encryption techniques to protect your 
          personal information, and we adhere to strict privacy policies to 
          safeguard your data."'
        />
        <Accordion
          title="3. What payment methods are accepted on the platform?"
          answer='"We accept various payment methods, including credit/debit cards, 
          digital wallets, and in some cases, cash on delivery (COD). 
          The specific payment options available may vary depending on your location."'
        />
        <Accordion
          title="4. What is the return policy for items purchased on the platform?"
          answer='"Our return policy may vary depending on the seller and the type of
           product. Generally, we strive to provide a hassle-free return experience 
           for our customers. You can find detailed information about our 
           return policy on the respective product pages or in the terms and 
           conditions section."'
        />
        <Accordion
          title="5. How can I contact customer support if I have a question or issue?"
          answer='"You can reach our customer support team through various channels, 
          including email, phone, or live chat. Our dedicated support staff 
          is available to assist you with any inquiries or concerns you may have."'
        />
      </div>
    </div>
  )
}

export default FAQ