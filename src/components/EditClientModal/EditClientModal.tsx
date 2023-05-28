import { SubmitHandler, useForm } from 'react-hook-form'
import { StyledForm } from '../../styles/StyledForm'
import { BaseModal } from '../BaseModal/BaseModal'
import { useClient } from '../../hooks/useClient'

export function EditClientModal() {
	const { register, handleSubmit } = useForm<any>({
		mode: 'onSubmit'
	})

	const { setIsEditClientModalOpen } = useClient()

	const submitUpdate : SubmitHandler<any> = async (data) => {
		console.log(data)
	}

	return (
		<BaseModal>
			<StyledForm onSubmit={handleSubmit(submitUpdate)}>
				<div className='modalHeader'>
					<h2>Editar Minhas Informações</h2>
					<span onClick={() => { setIsEditClientModalOpen(false) }}>X</span>
				</div>
				<fieldset>
					<label htmlFor='editContactFullName'>Nome Completo</label>
					<input id='editContactFullName' type='text' placeholder='Digite o nome completo...' defaultValue={'contactInfo.fullName'} {...register('fullName')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='editContactEmail'>Email</label>
					<input id='editContactEmail' type='email' placeholder='Digite o email...' defaultValue={'contactInfo.email'} {...register('email')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='editContactPhoneNumber'>Telefone</label>
					<input id='editContactPhoneNumber' type='text' placeholder='Digite o telefone...' defaultValue={'contactInfo.phoneNumber'} {...register('phoneNumber')}/>
				</fieldset>

				<button type='submit'>Editar</button>

				<span>Deletar Conta</span>
			</StyledForm>
		</BaseModal>
	)
}
