import { SubmitHandler, useForm } from 'react-hook-form'
import { StyledForm } from '../../styles/StyledForm'
import { BaseModal } from '../BaseModal/BaseModal'

export function EditDataModal() {
	const { register, handleSubmit } = useForm<any>({})

	const submitUpdate : SubmitHandler<any> = async (data) => {
		console.log(data)
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
