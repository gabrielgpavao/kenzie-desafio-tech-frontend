import { useClient } from '../../hooks/useClient'
import { CgProfile } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'

export function ContactsList() {
	const { clientInfo } = useClient()

	return (
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
	)
}
