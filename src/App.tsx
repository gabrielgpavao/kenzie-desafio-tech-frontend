import { StyledApp } from './styles/StyledApp'
import { RegisterModal } from './components/RegisterModal/RegisterModal'
import { StyledForm } from './styles/StyledForm'
import { LoginModal } from './components/LoginModal/LoginModal'
import { useClient } from './hooks/useClient'
import { Header } from './components/Header/Header'
import { ContactsList } from './components/ContactsList/ContactsList'

export function App() {
	const { isRegisterModalOpen, isLoginModalOpen } = useClient()

	return (
		<>
			{isRegisterModalOpen && <RegisterModal/>}
			{isLoginModalOpen && <LoginModal/>}

			<StyledApp>
				<Header/>

				<h2>Seus Contatos</h2>
				<main>
					<ContactsList/>

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
				</main>
			</StyledApp>
		</>
	)
}
