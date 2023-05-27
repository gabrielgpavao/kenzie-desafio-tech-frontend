import { CgProfile } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { StyledApp } from './styles/StyledApp'
import { RegisterModal } from './components/RegisterModal/RegisterModal'
import { StyledForm } from './styles/StyledForm'
import { LoginModal } from './components/LoginModal/LoginModal'
import { useClient } from './hooks/useClient'
import { Header } from './components/Header/Header'

export function App() {
	const { isRegisterModalOpen, isLoginModalOpen, clientInfo } = useClient()

	return (
		<>
			{isRegisterModalOpen && <RegisterModal/>}
			{isLoginModalOpen && <LoginModal/>}

			<StyledApp>
				<Header/>

				<h2>Seus Contatos</h2>
				<main>
					<ul>
						{clientInfo.contacts?.map((contact) => (
							<li key={contact.id} id={contact.id + ''}>
								<figure>
									<CgProfile size={40}/>
								</figure>
								<div>
									<p className='clientName'>{contact.fullName}</p>
									<p><MdEmail size={18}/> {contact.email}</p>
									<p><BsTelephone size={15}/> {contact.phoneNumber}</p>
								</div>
							</li>
						))}
					</ul>

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
