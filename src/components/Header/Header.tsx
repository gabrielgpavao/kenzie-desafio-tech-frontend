import { BsTelephone } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { useClient } from '../../hooks/useClient'
import { EditClientModal } from '../EditClientModal/EditClientModal'
import { ConfirmDeleteModal } from '../ConfirmDeleteModal/ConfirmDeleteModal'

export function Header() {
	const { clientInfo, isEditClientModalOpen, setIsEditClientModalOpen, isConfirmDeleteModalOpen, deleteClient } = useClient()

	return (
		<>
			{isEditClientModalOpen && <EditClientModal/>}
			{isConfirmDeleteModalOpen && <ConfirmDeleteModal callback={ deleteClient }/>}

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
