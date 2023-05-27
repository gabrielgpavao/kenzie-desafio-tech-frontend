import { Dispatch, SetStateAction } from 'react'

export interface iContactProviderValues {
	createContact: (contactData: tAddContactData) => Promise<void>,
	deleteContact: (clientId: string) => Promise<void>,
	contactsList: Array<iContactData>,
	setContactsList: Dispatch<SetStateAction<iContactData[]>>
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
