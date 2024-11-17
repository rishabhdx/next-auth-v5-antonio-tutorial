"use server";

import * as z from "zod";
import { SignUpSchema } from "@/schemas";

export const signUp = async (values: z.infer<typeof SignUpSchema>) => {
  console.log(values);

  const validatedFields = SignUpSchema.safeParse(values);

  if (!validatedFields.success) {
    console.error(validatedFields.error.errors);
    return { error: "Invalid fields" };
  }

  return { success: "Email sent!" };
};
