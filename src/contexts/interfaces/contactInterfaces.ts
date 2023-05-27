export interface iContactProviderValues {
	createContact: (contactData: tAddContactData) => Promise<void>,
	deleteContact: (clientId: string) => Promise<void>
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
