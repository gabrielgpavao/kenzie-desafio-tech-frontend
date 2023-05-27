import { createContext } from 'react'
import { iProviderProps } from './interfaces/clientInterfaces'
import { api } from '../services/api'
import { iContactProviderValues, tAddContactData } from './interfaces/contactInterfaces'

export const ContactContext = createContext({} as iContactProviderValues)

export function ContactProvider({ children }: iProviderProps) {
	async function createContact(contactData: tAddContactData) {
		try {
			await api.post('/contacts', contactData)
		} catch (error) {
			console.log(error)
		}
	}

	async function deleteContact(contactId: string) {
		try {
			await api.delete(`/contacts/${contactId}`)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<ContactContext.Provider value={{
			createContact,
			deleteContact
		}}>
			{children}
		</ContactContext.Provider>
	)
}
