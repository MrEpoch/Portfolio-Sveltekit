import { z } from "zod";
 
export const formSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name has to be at least 3 characters long" })
    .max(50, { message: "Name can't be longer than 50 characters" }),
  email: z.string().email({ message: "Invalid email" }),
  message: z
    .string()
    .min(15, { message: "Message has to be at least 15 characters long" })
    .max(400, { message: "Message can't be longer than 400 characters" }),
  "h-captcha-response": z.string(),
  privacyPolicy: z.boolean(),
});
 
export type FormSchema = typeof formSchema;
