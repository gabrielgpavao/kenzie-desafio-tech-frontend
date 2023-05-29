import { z } from 'zod'

export const addContactSchema = z.object({
	fullName: z.string().max(127),
	email: z.string().email().max(127),
	phoneNumber: z.string().length(11)
})

export type tAddContact = z.infer<typeof addContactSchema>
