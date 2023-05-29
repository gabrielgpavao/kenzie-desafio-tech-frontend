import { z } from 'zod'

export const loginSchema = z.object({
	email: z.string().email().max(127),
	password: z.string()
})

export type tLoginData = z.infer<typeof loginSchema>
