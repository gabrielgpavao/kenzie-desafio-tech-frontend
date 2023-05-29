import { useClient } from '../../hooks/useClient'
import { BaseModal } from '../BaseModal/BaseModal'
import { StyledConfirmDeleteModal } from './StyledConfirmDeleteModal'

interface iConfirmDeleteModalProps {
	callback: () => Promise<void>
}

export function ConfirmDeleteModal({ callback }: iConfirmDeleteModalProps) {
	const { setIsConfirmDeleteModalOpen } = useClient()

	return (
		<BaseModal>
			<StyledConfirmDeleteModal>
				<h3>Confirmar Deleção</h3>
				<div>
					<button onClick={() => { setIsConfirmDeleteModalOpen(false) }}>Cancelar</button>
					<button onClick={async () => { await callback(); setIsConfirmDeleteModalOpen(false) }}>Deletar</button>
				</div>
			</StyledConfirmDeleteModal>
		</BaseModal>
	)
}
