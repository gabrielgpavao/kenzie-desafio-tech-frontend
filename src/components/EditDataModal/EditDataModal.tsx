import { StyledForm } from '../../styles/StyledForm'
import { BaseModal } from '../BaseModal/BaseModal'

export function EditDataModal() {
	return (
		<BaseModal>
			<StyledForm>
				<h2>Editar Informações de Contato</h2>
				<fieldset>
					<label htmlFor='editFullName'>Nome Completo</label>
					<input id='editFullName' type='text' placeholder='Digite o nome completo...'/>
				</fieldset>

				<fieldset>
					<label htmlFor='editEmail'>Email</label>
					<input id='editEmail' type='email' placeholder='Digite o email...'/>
				</fieldset>

				<fieldset>
					<label htmlFor='editPhoneNumber'>Telefone</label>
					<input id='editPhoneNumber' type='text' placeholder='Digite o telefone...'/>
				</fieldset>

				<button type='submit'>Editar</button>
			</StyledForm>
		</BaseModal>
	)
}
