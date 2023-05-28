import { BsTelephone } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { useClient } from '../../hooks/useClient'
import { EditClientModal } from '../EditClientModal/EditClientModal'

export function Header() {
	const { clientInfo, isEditClientModalOpen, setIsEditClientModalOpen } = useClient()

	return (
		<>
			{isEditClientModalOpen && <EditClientModal/>}

			<header>
				<h1>Desafio Tech<br/>Full Stack</h1>
				<div>
					<p><MdEmail size={18}/>{clientInfo.email}</p>
					<p><BsTelephone size={15}/>{clientInfo.phoneNumber}</p>
					<small onClick={() => { setIsEditClientModalOpen(true) }}>Editar</small>
				</div>
			</header>
		</>
	)
}
