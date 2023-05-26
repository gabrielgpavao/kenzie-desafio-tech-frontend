import React from 'react'
import { BaseModal } from '../BaseModal/BaseModal'

export function RegisterModal() {
	return (
		<BaseModal>
			<form>
				<fieldset>
					<label htmlFor='registerFullName'>Nome Completo</label>
					<input id='registerFullName' type='text' placeholder='Digite seu nome completo...'/>
				</fieldset>

				<fieldset>
					<label htmlFor='registerEmail'>Email</label>
					<input id='registerEmail' type='email' placeholder='Digite seu email...'/>
				</fieldset>

				<fieldset>
					<label htmlFor='registerPassword'>Senha</label>
					<input id='registerPassword' type='password' placeholder='Digite sua senha...'/>
				</fieldset>

				<fieldset>
					<label htmlFor='registerPhoneNumber'>Telefone</label>
					<input id='registerPhoneNumber' type='text' placeholder='Digite seu número de telefone...'/>
				</fieldset>

				<button type='submit'>Cadastrar</button>
			</form>
		</BaseModal>
	)
}
