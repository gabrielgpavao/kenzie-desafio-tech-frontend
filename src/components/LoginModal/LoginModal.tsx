import React, { useContext } from 'react'
import { BaseModal } from '../BaseModal/BaseModal'
import { StyledForm } from '../../styles/StyledForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ClientContext } from '../../contexts/ClientContext'

type FormData = {
    email: string;
    password: string;
};

export function LoginModal() {
	const { register, handleSubmit, formState: { errors }} = useForm<FormData>({
		mode: 'onBlur'
	})

	const { login } = useContext(ClientContext)

	const submitLogin : SubmitHandler<FormData> = (data) => {
		login(data)
	}

	return (
		<BaseModal>
			<StyledForm onSubmit={handleSubmit(submitLogin)} noValidate>
				<fieldset>
					<label htmlFor='loginEmail'>Email</label>
					<input id='loginEmail' type='email' placeholder='Digite seu email...' {...register('email')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='loginPassword'>Senha</label>
					<input id='loginPassword' type='password' placeholder='Digite sua senha...' {...register('password')}/>
				</fieldset>

				<button type='submit'>Submeter</button>
			</StyledForm>
		</BaseModal>
	)
}
