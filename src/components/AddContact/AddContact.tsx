import { SubmitHandler, useForm } from 'react-hook-form'
import { StyledForm } from '../../styles/StyledForm'
import { addContactSchema, tAddContact } from './addContactSchema'
import { useContact } from '../../hooks/useContact'
import { zodResolver } from '@hookform/resolvers/zod'

export function AddContact() {
	const { createContact, listContacts } = useContact()

	const { register, handleSubmit, reset } = useForm<tAddContact>({
		mode: 'onSubmit',
		resolver: zodResolver(addContactSchema)
	})

	const submitContact: SubmitHandler<tAddContact> = async (data) => {
		try {
			await createContact(data)
			await listContacts()
			reset()
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<section>
			<h3>Adicionar novo contato</h3>
			<StyledForm onSubmit={handleSubmit(submitContact)}>
				<fieldset>
					<label htmlFor='fullName'>Nome Completo</label>
					<input id='fullName' type='text' placeholder='Digite o nome completo...' {...register('fullName')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='email'>Email</label>
					<input id='email' type='email' placeholder='Digite o email...' {...register('email')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='phoneNumber'>Telefone</label>
					<input id='phoneNumber' type='text' placeholder='Digite o telefone...' {...register('phoneNumber')}/>
				</fieldset>

				<button type='submit'>Adicionar</button>
			</StyledForm>
		</section>
	)
}
