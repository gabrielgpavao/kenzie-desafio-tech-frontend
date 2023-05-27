import { Dispatch, SetStateAction } from 'react'

export interface iContactProviderValues {
	contactsList: Array<iContactData>,
	setContactsList: Dispatch<SetStateAction<iContactData[]>>,
	createContact: (contactData: tAddContactData) => Promise<void>,
	deleteContact: (clientId: string) => Promise<void>,
	listContacts: () => Promise<void>,
	updateContact: (contactId: string, contactData: tAddContactData) => Promise<void>
}

export interface iContactData {
	id: number
	fullName: string,
	email: string,
	phoneNumber: string,
	addedAt: Date,
	clientId: number
}

export type tAddContactData = Omit<iContactData, 'id' | 'addedAt' | 'clientId'>
