import { StyledForm } from '../../styles/StyledForm'

export function AddContact() {
	return (
		<section>
			<h3>Adicionar novo contato</h3>
			<StyledForm>
				<fieldset>
					<label htmlFor='fullName'>Nome Completo</label>
					<input id='fullName' type='text' placeholder='Digite o nome completo...'/>
				</fieldset>

				<fieldset>
					<label htmlFor='email'>Email</label>
					<input id='email' type='email' placeholder='Digite o email...'/>
				</fieldset>

				<fieldset>
					<label htmlFor='phoneNumber'>Telefone</label>
					<input id='phoneNumber' type='text' placeholder='Digite o telefone...'/>
				</fieldset>

				<button type='submit'>Adicionar</button>
			</StyledForm>
		</section>
	)
}
