import { createContext, useEffect, useState } from 'react'
import { iProviderProps } from './interfaces/clientInterfaces'
import { api } from '../services/api'
import { iContactData, iContactProviderValues, tAddContactData } from './interfaces/contactInterfaces'

export const ContactContext = createContext({} as iContactProviderValues)

export function ContactProvider({ children }: iProviderProps) {
	const [contactsList, setContactsList] = useState([] as Array<iContactData>)

	async function createContact(contactData: tAddContactData) {
		try {
			await api.post('/contacts', contactData)
		} catch (error) {
			console.log(error)
		}
	}

	async function listContacts() {
		try {
			const response = await api.get('/contacts')
			setContactsList(response.data)
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

	useEffect(() => {
		async function handleListContacts() {
			await listContacts()
		}
		handleListContacts()
	}, [])

	return (
		<ContactContext.Provider value={{
			createContact,
			deleteContact,
			contactsList,
			setContactsList
		}}>
			{children}
		</ContactContext.Provider>
	)
}
