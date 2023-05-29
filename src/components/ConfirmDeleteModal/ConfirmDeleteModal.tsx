import { BaseModal } from '../BaseModal/BaseModal'
import { StyledConfirmDeleteModal } from './StyledConfirmDeleteModal'

export function ConfirmDeleteModal() {
	return (
		<BaseModal>
			<StyledConfirmDeleteModal>
				<h3>Confirmar Deleção</h3>
				<div>
					<button>Cancelar</button>
					<button>Deletar</button>
				</div>
			</StyledConfirmDeleteModal>
		</BaseModal>
	)
}
