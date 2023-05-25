import React, { createContext } from 'react'
import { iClientProviderValue, iProviderProps } from './interfaces'

export const ClientContext = createContext({} as iClientProviderValue)

export function ClientProvider({ children }: iProviderProps) {
	return (
		<ClientContext.Provider value={{}}>
			{children}
		</ClientContext.Provider>
	)
}
