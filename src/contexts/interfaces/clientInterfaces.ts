import { Dispatch, ReactNode, SetStateAction } from 'react'
import { iContactData } from './contactInterfaces'

export interface iProviderProps {
	children: ReactNode
}

export interface iClientProviderValue {
	login: (data: iLoginData) => Promise<void>,
	register: (data: iRegisterData) => Promise<void>,
	isRegisterModalOpen: boolean,
	setIsRegisterModalOpen: Dispatch<SetStateAction<boolean>>,
	isLoginModalOpen: boolean,
	setIsLoginModalOpen: Dispatch<SetStateAction<boolean>>,
	clientInfo: iClientData,
	isEditClientModalOpen: boolean,
	setIsEditClientModalOpen: Dispatch<SetStateAction<boolean>>
}

export interface iLoginData {
	email: string,
	password: string
}

export interface iRegisterData extends iLoginData {
	fullName: string
	phoneNumber: string
}

export interface iClientData {
	fullName: string,
	email: string,
	phoneNumber: string,
	contacts?: Array<iContactData>
}

