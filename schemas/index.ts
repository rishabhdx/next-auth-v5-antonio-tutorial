import * as z from "zod";

export const SignInSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  password: z
    .string({
      message: "Please enter your password"
    })
    .min(6, {
      message: "Password must be at least 6 characters long"
    })
});

export const SignUpSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  password: z
    .string({
      message: "Please enter your password"
    })
    .min(6, {
      message: "Password must be at least 6 characters long"
    }),
  name: z
    .string({
      message: "Please enter a valid name"
    })
    .min(1, {
      message: "Please enter your name"
    })
});
