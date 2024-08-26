import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name can be up to 50 characters"),
  email: z.string().email("Invalid email address"),
  number: z.string().min(9, "Number should be at least 9 digits"),
});
