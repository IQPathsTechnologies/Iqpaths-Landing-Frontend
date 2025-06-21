import { z } from "zod";

export const internshipFormSchema = z.object({
  name: z
    .string()
    .min(1, "Full Name is required")
    .regex(/^[A-Za-z\s]+$/, "Name should contain only letters and spaces"),
  
  email: z.string().email("Invalid email format"),

  mobileNo: z
    .string()
    .min(10, "Contact number must be 10 digits")
    .max(10, "Contact number must be 10 digits")
    .regex(/^[0-9]{10}$/, "Enter a valid Contact Number"),

  college: z
    .string()
    .min(1, "College is required")
    .regex(/^[A-Za-z\s]+$/, "College name should contain only letters and spaces"),

  year: z.string().min(1, "Year is required"),

  github: z.string().url("Invalid URL").optional().or(z.literal("")),

  resume: z
    .any()
    .refine((files) => files?.length > 0, "Resume is required"),
});
