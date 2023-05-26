import React, { createContext, useEffect } from 'react'
import { iClientProviderValue, iProviderProps } from './interfaces'
import { api } from '../services/api'

export const ClientContext = createContext({} as iClientProviderValue)

export function ClientProvider({ children }: iProviderProps) {
	async function retrieveClientInfo() {
		try {
			const response = await api.get(`clients/${1}`)
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
		<ClientContext.Provider value={{}}>
			{children}
		</ClientContext.Provider>
	)
}
