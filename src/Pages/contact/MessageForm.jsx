import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { formSchema } from "./Zschema"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import emailjs from '@emailjs/browser';



export default function MessageForm() {
  // 1. Define form.
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
    },
  })

  // function onSubmit(values) {
  //   console.log(values)
  // }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9cw2qph', 'template_71h6t14', e.target, 'R3AW7mLsyVgGJjfX3',)
      .then((result) => {
        console.log(result.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send message.');
      });

    e.target.reset(); // Reset the form after submission
  };

  return (
    <Form {...form}>
      <form onSubmit={sendEmail} className="space-y-4 mt-5">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <>
              <FormItem>
                {/* <FormLabel>Name</FormLabel> */}
                <FormControl>
                  <Input placeholder="Your Name *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <>
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input placeholder="Your Email Address *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
          control={form.control}
          name="number"
          render={({ field }) => (
            <>
              <FormItem>
                {/* <FormLabel>Email</FormLabel> */}
                <FormControl>
                  <Input placeholder="Your Number *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <Textarea placeholder="Write Your Message Here..." name="message" />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}