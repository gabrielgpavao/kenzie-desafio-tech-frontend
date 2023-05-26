import React from 'react'
import { BaseModal } from '../BaseModal/BaseModal'
import { StyledForm } from '../../styles/StyledForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { loginSchema, tLoginData } from './loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useClient } from '../../hooks/useClient'

export function LoginModal() {
	const { register, handleSubmit, formState: { errors }} = useForm<tLoginData>({
		mode: 'onBlur',
		resolver: zodResolver(loginSchema)
	})

	const { login } = useClient()

	const submitLogin : SubmitHandler<tLoginData> = async (data) => {
		await login(data)
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
