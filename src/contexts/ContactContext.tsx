import { createContext, useEffect, useState } from 'react'
import { iProviderProps } from './interfaces/clientInterfaces'
import { api } from '../services/api'
import { iContactData, iContactProviderValues, tAddContactData } from './interfaces/contactInterfaces'

export const ContactContext = createContext({} as iContactProviderValues)

export function ContactProvider({ children }: iProviderProps) {
	const [contactsList, setContactsList] = useState([] as Array<iContactData>)
	const [contactToEdit, setContactToEdit] = useState({} as iContactData)
	const [isEditContactModalOpen, setIsEditContactModalOpen] = useState(false)

	async function createContact(contactData: tAddContactData) {
		try {
			await api.post('/contacts', contactData)
		} catch (error) {
			console.log(error)
		}
	}

	async function listContacts() {
		try {
			const token = sessionStorage.getItem('@desafio-tech:token')
			const response = await api.get('/contacts', {
				headers: {
					Authorization: `Bearer ${token}`
				}
			})

			api.defaults.headers.common['Authorization'] = `Bearer ${token}`

			setContactsList(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	async function updateContact(contactId: string, contactData: tAddContactData) {
		try {
			await api.patch(`/contacts/${contactId}`, contactData)
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
			contactsList,
			contactToEdit,
			isEditContactModalOpen,
			setIsEditContactModalOpen,
			setContactToEdit,
			setContactsList,
			listContacts,
			createContact,
			updateContact,
			deleteContact
		}}>
			{children}
		</ContactContext.Provider>
	)
}
