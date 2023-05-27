import { BsTelephone } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { useClient } from '../../hooks/useClient'

export function Header() {
	const { clientInfo } = useClient()

	return (
		<header>
			<h1>Desafio Tech<br/>Full Stack</h1>
			<div>
				<p><MdEmail size={18}/>{clientInfo.email}</p>
				<p><BsTelephone size={15}/>{clientInfo.phoneNumber}</p>
			</div>
		</header>
	)
}
