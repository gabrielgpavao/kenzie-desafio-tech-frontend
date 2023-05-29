import { StyledApp } from './styles/StyledApp'
import { RegisterModal } from './components/RegisterModal/RegisterModal'
import { LoginModal } from './components/LoginModal/LoginModal'
import { useClient } from './hooks/useClient'
import { Header } from './components/Header/Header'
import { ContactsList } from './components/ContactsList/ContactsList'
import { AddContact } from './components/AddContact/AddContact'
import { ContactProvider } from './contexts/ContactContext'

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
					<ContactProvider>
						<ContactsList/>
						<AddContact/>
					</ContactProvider>
				</main>
			</StyledApp>
		</>
	)
}
