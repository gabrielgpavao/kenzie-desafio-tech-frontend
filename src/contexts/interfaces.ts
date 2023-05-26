import { ReactNode } from 'react'

export interface iProviderProps {
	children: ReactNode
}

export interface iClientProviderValue {
	login: (data: iLoginData) => Promise<void>,
	register: (data: iRegisterData) => Promise<void>
}

export interface iLoginData {
	email: string,
	password: string
}

export interface iRegisterData extends iLoginData {
	fullName: string
	phoneNumber: string
}
