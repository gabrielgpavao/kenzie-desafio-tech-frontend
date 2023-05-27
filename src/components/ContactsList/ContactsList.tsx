import { useClient } from '../../hooks/useClient'
import { CgProfile } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { useContact } from '../../hooks/useContact'

export function ContactsList() {
	const { contactsList } = useContact()

	return (
		<ul>
			{contactsList.map((contact) => (
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
