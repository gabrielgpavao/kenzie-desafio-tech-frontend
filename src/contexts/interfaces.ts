import { ReactNode } from 'react'

export interface iProviderProps {
	children: ReactNode
}

export interface iClientProviderValue {
	login: (data: iLoginData) => void,
	register: (data: iRegisterData) => void
}

export interface iLoginData {
	email: string,
	password: string
}

export interface iRegisterData extends iLoginData {
	fullName: string
	phoneNumber: string
}
