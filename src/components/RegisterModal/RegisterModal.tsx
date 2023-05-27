import React from 'react'
import { BaseModal } from '../BaseModal/BaseModal'
import { StyledForm } from '../../styles/StyledForm'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useClient } from '../../hooks/useClient'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, tRegisterData } from './registerSchema'

export function RegisterModal() {
	const { register, handleSubmit, formState: { errors }} = useForm<tRegisterData>({
		mode: 'onBlur',
		resolver: zodResolver(registerSchema)
	})

	const { register: registerClient, setIsRegisterModalOpen, setIsLoginModalOpen } = useClient()

	const submitRegister : SubmitHandler<tRegisterData> = async (data) => {
		await registerClient(data)
	}

	return (
		<BaseModal>
			<StyledForm onSubmit={handleSubmit(submitRegister)} noValidate>
				<fieldset>
					<label htmlFor='registerFullName'>Nome Completo</label>
					<input id='registerFullName' type='text' placeholder='Digite seu nome completo...' {...register('fullName')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='registerEmail'>Email</label>
					<input id='registerEmail' type='email' placeholder='Digite seu email...' {...register('email')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='registerPassword'>Senha</label>
					<input id='registerPassword' type='password' placeholder='Digite sua senha...' {...register('password')}/>
				</fieldset>

				<fieldset>
					<label htmlFor='registerPhoneNumber'>Telefone</label>
					<input id='registerPhoneNumber' type='text' placeholder='Digite seu número de telefone...' {...register('phoneNumber')}/>
				</fieldset>

				<button type='submit'>Cadastrar</button>

				<small>Já possui cadastro? Clique{}
					<span onClick={() => { setIsRegisterModalOpen(false); setIsLoginModalOpen(true) }}>
						aqui.
					</span>
				</small>
			</StyledForm>
		</BaseModal>
	)
}
