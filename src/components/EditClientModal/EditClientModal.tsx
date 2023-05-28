import { SubmitHandler, useForm } from 'react-hook-form'
import { StyledForm } from '../../styles/StyledForm'
import { BaseModal } from '../BaseModal/BaseModal'
import { useClient } from '../../hooks/useClient'
import { addContactSchema, tAddContact } from '../AddContact/addContactSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export function EditClientModal() {
	const { register, handleSubmit } = useForm<tAddContact>({
		mode: 'onSubmit',
		resolver: zodResolver(addContactSchema)
	})

	const { clientInfo, setIsEditClientModalOpen, updateClient, retrieveClientInfo } = useClient()

	const submitUpdate : SubmitHandler<tAddContact> = async (data) => {
		await updateClient(data)
		await retrieveClientInfo()
		setIsEditClientModalOpen(false)
	}

	return (
		<BaseModal>
			<StyledForm onSubmit={handleSubmit(submitUpdate)}>
				<div className='modalHeader'>
					<h2>Editar Minhas Informações</h2>
					<span onClick={() => { setIsEditClientModalOpen(false) }}>X</span>
				</div>
				<fieldset>
					<label htmlFor='editClientFullName'>Nome Completo</label>
					<input id='editClientFullName' type='text' placeholder='Digite o nome completo...' defaultValue={clientInfo.fullName} {...register('fullName')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='editClientEmail'>Email</label>
					<input id='editClientEmail' type='email' placeholder='Digite o email...' defaultValue={clientInfo.email} {...register('email')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='editClientPhoneNumber'>Telefone</label>
					<input id='editClientPhoneNumber' type='text' placeholder='Digite o telefone...' defaultValue={clientInfo.phoneNumber} {...register('phoneNumber')}/>
				</fieldset>

				<button type='submit'>Editar</button>

				<span className='deleteClient'>Deletar Conta</span>
			</StyledForm>
		</BaseModal>
	)
}
