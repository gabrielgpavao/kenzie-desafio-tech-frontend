import { ReactNode } from 'react'

export interface iProviderProps {
	children: ReactNode
}

export interface iClientProviderValue {
	login: (data: iLoginData) => void
}

export interface iLoginData {
	email: string,
	password: string
}
