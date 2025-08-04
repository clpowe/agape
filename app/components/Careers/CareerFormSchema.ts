import { z } from "zod";

const MAX_FILE_SIZE = 2 * 1024 * 1024 // 2MB
const ACCEPTED_IMAGE_TYPES = [
  'application/pdf',
  'application/msword',           // .doc
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document', // .docx
  'application/rtf',
  'text/plain'
];

export const ApplicationSchema = z
  .object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(7, { message: "Invalid phone number" }),
    position: z.enum([
      "Learning and Writing Strategist",
      "Tutor",
      "Essay Grader",
    ]),
    resume: z.instanceof(File ,{
    message: "Please upload a file",
  }).refine((file) => file.size <= MAX_FILE_SIZE,{
    message: 'The file is to large. Please choose a file smaller than 2mb'
  }).refine((file) => ACCEPTED_IMAGE_TYPES.includes(file.type),{
    message: 'Please choose a file of type pdf, doc, docx, rtf, or txt'
  })
})
