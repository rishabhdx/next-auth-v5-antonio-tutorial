"use server";

import * as z from "zod";
import { SignInSchema } from "@/schemas";

export const signIn = async (values: z.infer<typeof SignInSchema>) => {
  console.log(values);

  const validatedFields = SignInSchema.safeParse(values);

  if (!validatedFields.success) {
    console.error(validatedFields.error.errors);
    return { error: "Invalid fields" };
  }

  return { success: "Email sent!" };
};
