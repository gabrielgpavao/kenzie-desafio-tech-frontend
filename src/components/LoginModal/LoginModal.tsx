import React from 'react'
import { BaseModal } from '../BaseModal/BaseModal'
import { StyledForm } from '../../styles/StyledForm'

export function LoginModal() {
	return (
		<BaseModal>
			<StyledForm>
				<fieldset>
					<label htmlFor='loginEmail'>Email</label>
					<input id='loginEmail' type='email' placeholder='Digite seu email...'/>
				</fieldset>

				<fieldset>
					<label htmlFor='loginPassword'>Senha</label>
					<input id='loginPassword' type='password' placeholder='Digite sua senha...'/>
				</fieldset>

				<button type='submit'>Submeter</button>
			</StyledForm>
		</BaseModal>
	)
}
