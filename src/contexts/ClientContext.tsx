import React, { createContext, useEffect, useState } from 'react'
import { iClientProviderValue, iProviderProps, iLoginData, iRegisterData } from './interfaces'
import { api } from '../services/api'

export const ClientContext = createContext({} as iClientProviderValue)

export function ClientProvider({ children }: iProviderProps) {
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false)
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)

	async function login(clientCredentials: iLoginData) {
		try {
			const response = await api.post('/login', clientCredentials)
			sessionStorage.setItem('@desafio-tech:token', response.data)

		} catch (error) {
			console.log(error)
		}
	}

	async function register(clientData: iRegisterData) {
		try {
			const response = await api.post('/clients', clientData)

			await login({
				email: response.data.email,
				password: response.data.password
			})

		} catch (error) {
			console.log(error)
		}
	}

	async function retrieveClientInfo() {
		try {
			const response = await api.get(`/clients/${1}`)
			return response.data
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		async function handleRetrieveClientInfo() {
			await retrieveClientInfo()
		}
		handleRetrieveClientInfo()
	}, [])

	return (
		<ClientContext.Provider value={{
			login,
			register,
			isRegisterModalOpen,
			setIsRegisterModalOpen,
			isLoginModalOpen,
			setIsLoginModalOpen
		}}>
			{children}
		</ClientContext.Provider>
	)
}
