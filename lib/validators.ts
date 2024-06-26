import * as z from "zod"

export const eventFormSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(3, 'Description must be at least 3 characters').max(400, 'Description must be less than 400 characters'),
  location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
  imageUrl: z.string(),
  startDate: z.date(),
  endDate: z.date(),
  categories: z.array(z.string()),
  price: z.coerce.number().optional(),
  isFree: z.boolean(),
  url: z.string().url().optional().or(z.literal(''))
})