import { useContext } from 'react'
import { ContactContext } from '../contexts/ContactContext'

export const useContact = () => {
	const contactContext = useContext(ContactContext)

	return contactContext
}
