import { z } from 'zod'

export const registerSchema = z.object({
	fullName: z.string().max(127),
	email: z.string().email().max(127),
	password: z.string(),
	phoneNumber: z.string().length(11)
})

export type tRegisterData = z.infer<typeof registerSchema>
