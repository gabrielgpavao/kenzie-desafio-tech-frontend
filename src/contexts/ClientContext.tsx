import React, { createContext, useEffect } from 'react'
import { iClientProviderValue, iProviderProps, iLoginData, iRegisterData } from './interfaces'
import { api } from '../services/api'

export const ClientContext = createContext({} as iClientProviderValue)

export function ClientProvider({ children }: iProviderProps) {
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
		<ClientContext.Provider value={{ login, register }}>
			{children}
		</ClientContext.Provider>
	)
}
