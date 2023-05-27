import { createContext } from 'react'
import { iProviderProps } from './interfaces'

export const ContactContext = createContext({})

export function ContactProvider({ children }: iProviderProps) {
	return (
		<ContactContext.Provider value={{}}>
			{children}
		</ContactContext.Provider>
	)
}
