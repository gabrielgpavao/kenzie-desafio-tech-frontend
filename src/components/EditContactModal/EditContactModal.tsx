import { SubmitHandler, useForm } from 'react-hook-form'
import { StyledForm } from '../../styles/StyledForm'
import { BaseModal } from '../BaseModal/BaseModal'
import { zodResolver } from '@hookform/resolvers/zod'
import { addContactSchema, tAddContact } from '../AddContact/addContactSchema'
import { useContact } from '../../hooks/useContact'

interface iEditContactModalProps {
	contactId: string
}

export function EditContactModal({ contactId }: iEditContactModalProps) {
	const { register, handleSubmit } = useForm<tAddContact>({
		mode: 'onSubmit',
		resolver: zodResolver(addContactSchema)
	})

	const { updateContact } = useContact()

	const submitUpdate : SubmitHandler<tAddContact> = async (data) => {
		await updateContact(contactId, data)
	}

	return (
		<BaseModal>
			<StyledForm onSubmit={handleSubmit(submitUpdate)}>
				<h2>Editar Informações do Contato</h2>
				<fieldset>
					<label htmlFor='editContactFullName'>Nome Completo</label>
					<input id='editContactFullName' type='text' placeholder='Digite o nome completo...' {...register('fullName')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='editContactEmail'>Email</label>
					<input id='editContactEmail' type='email' placeholder='Digite o email...' {...register('email')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='editContactPhoneNumber'>Telefone</label>
					<input id='editContactPhoneNumber' type='text' placeholder='Digite o telefone...' {...register('phoneNumber')}/>
				</fieldset>

				<button type='submit'>Editar</button>
			</StyledForm>
		</BaseModal>
	)
}
