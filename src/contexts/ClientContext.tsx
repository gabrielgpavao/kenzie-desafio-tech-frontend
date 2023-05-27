import { createContext, useEffect, useState } from 'react'
import { iClientProviderValue, iProviderProps, iLoginData, iRegisterData, iClientData } from './interfaces/clientInterfaces'
import { api } from '../services/api'

export const ClientContext = createContext({} as iClientProviderValue)

export function ClientProvider({ children }: iProviderProps) {
	const [clientInfo, setClientInfo] = useState({} as iClientData)
	const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false)
	const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false)

	async function login(clientCredentials: iLoginData) {
		try {
			const response = await api.post('/login', clientCredentials)
			sessionStorage.setItem('@desafio-tech:client-id', response.data.clientId)
			sessionStorage.setItem('@desafio-tech:token', response.data.token)
			setIsLoginModalOpen(false)

		} catch (error) {
			console.log(error)
		}
	}

	async function register(clientData: iRegisterData) {
		try {
			const response = await api.post('/clients', clientData)

			await login({
				email: response.data.email,
				password: clientData.password
			})

			setIsRegisterModalOpen(false)

		} catch (error) {
			console.log(error)
		}
	}

	async function retrieveClientInfo(clientId: string, token: string) {
		try {
			const response = await api.get(`/clients/${clientId}`, {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})

			api.defaults.headers.common['Authorization'] = `Bearer ${token}`

			return response.data
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		async function handleRetrieveClientInfo() {
			try {
				const token = sessionStorage.getItem('@desafio-tech:token')
				const clientId = sessionStorage.getItem('@desafio-tech:client-id')

				if (!token || !clientId) {
					throw new Error('Unauthenticated')
				}

				const client = await retrieveClientInfo(clientId, token)
				setClientInfo(client)

			} catch (error) {
				setIsLoginModalOpen(true)
				console.log(error)
			}
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
			setIsLoginModalOpen,
			clientInfo
		}}>
			{children}
		</ClientContext.Provider>
	)
}
