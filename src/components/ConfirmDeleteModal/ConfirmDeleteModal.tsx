import { BaseModal } from '../BaseModal/BaseModal'

export function ConfirmDeleteModal() {
	return (
		<BaseModal>
			<div>
				<h3>Confirmar Deleção</h3>
				<div>
					<button>Cancelar</button>
					<button>Deletar</button>
				</div>
			</div>
		</BaseModal>
	)
}
