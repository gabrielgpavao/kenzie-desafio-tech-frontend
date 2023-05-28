import { SubmitHandler, useForm } from 'react-hook-form'
import { StyledForm } from '../../styles/StyledForm'
import { BaseModal } from '../BaseModal/BaseModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { addContactSchema, tAddContact } from '../AddContact/addContactSchema'
import { useContact } from '../../hooks/useContact'
import { iContactData } from '../../contexts/interfaces/contactInterfaces'

interface iEditContactModalProps {
	contactInfo: iContactData
}

export function EditContactModal({ contactInfo }: iEditContactModalProps) {
	const { register, handleSubmit } = useForm<tAddContact>({
		mode: 'onSubmit',
		resolver: zodResolver(addContactSchema)
	})

	const { updateContact, setIsEditContactModalOpen, listContacts } = useContact()

	const submitUpdate : SubmitHandler<tAddContact> = async (data) => {
		await updateContact(contactInfo.id + '', data)
		await listContacts()
		setIsEditContactModalOpen(false)
	}

	return (
		<BaseModal>
			<StyledForm onSubmit={handleSubmit(submitUpdate)}>
				<h2>Editar Informações do Contato</h2>
				<fieldset>
					<label htmlFor='editContactFullName'>Nome Completo</label>
					<input id='editContactFullName' type='text' placeholder='Digite o nome completo...' defaultValue={contactInfo.fullName} {...register('fullName')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='editContactEmail'>Email</label>
					<input id='editContactEmail' type='email' placeholder='Digite o email...' defaultValue={contactInfo.email} {...register('email')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='editContactPhoneNumber'>Telefone</label>
					<input id='editContactPhoneNumber' type='text' placeholder='Digite o telefone...' defaultValue={contactInfo.phoneNumber} {...register('phoneNumber')}/>
				</fieldset>

				<button type='submit'>Editar</button>
			</StyledForm>
		</BaseModal>
	)
}
