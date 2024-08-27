import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { formSchema } from "./Zschema";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import emailjs from '@emailjs/browser';
import { toast } from "sonner";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function MessageForm() {
  const [loader, setLoader] = React.useState(false);
  const { cart, totalPrice } = useShoppingCart();
  // Define form using react-hook-form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      message: "",
      products: "",
      totalPrice: "",
    },
  });

  // Function to handle email sending
  function sendEmail(data) {
    setLoader(true);
    const cartSummary = cart
      .map(item => `${item.name} (Qty: ${item.quantity}) - ${item.price}.00$`)
      .join("\n");

    // Convert form data into an object EmailJS can use
    const emailData = {
      name: data.name,
      email: data.email,
      number: data.number,
      message: data.message,
      products: cartSummary,
      totalPrice: totalPrice
    };
    console.log(emailData);

    emailjs.send('service_9cw2qph', 'template_71h6t14', emailData, 'R3AW7mLsyVgGJjfX3')
      .then((result) => {
        console.log(result.text);
        toast.success('Message sent successfully!');
        setLoader(false);
        form.reset(); // Reset the form after submission
      }, (error) => {
        console.log(error.text);
        toast.error('Failed to send message.');
      });

  }

  const fields = [
    { name: "name", placeholder: "Your Name *", component: Input },
    { name: "email", placeholder: "Your Email Address *", component: Input },
    { name: "number", placeholder: "Your Number *", component: Input },
    { name: "message", placeholder: "Write Your Message Here...", component: Textarea },
  ];

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(sendEmail)} className="space-y-4 mt-5">
        {fields.map((field) => (
          <FormField
            key={field.name}
            control={form.control}
            name={field.name}
            render={({ field: formField }) => (
              <FormItem>
                <FormControl>
                  <field.component
                    placeholder={field.placeholder}
                    {...formField}
                    disabled={loader} // Disable inputs when loading
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button disabled={loader} type="submit">{loader ? 'Sending...' : 'Submit'}</Button>
      </form>
    </Form>
  );
}
