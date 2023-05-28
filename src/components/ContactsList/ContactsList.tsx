import { CgProfile } from 'react-icons/cg'
import { MdEmail, MdOutlineEdit } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useContact } from '../../hooks/useContact'

export function ContactsList() {
	const { contactsList, deleteContact, listContacts } = useContact()
	async function handleDeleteContact(contactId: string) {
		await deleteContact(contactId)
		await listContacts()
	}

	return (
		<ul>
			{contactsList.map((contact) => (
				<li key={contact.id} id={contact.id + ''}>
					<figure>
						<CgProfile size={40} title='Foto de Perfil'/>
					</figure>
					<div>
						<p className='clientName'>{contact.fullName}</p>
						<p><MdEmail size={18}/> {contact.email}</p>
						<p><BsTelephone size={15}/> {contact.phoneNumber}</p>
					</div>
					<figure className='icons'>
						<MdOutlineEdit size={25} />
						<RiDeleteBinLine size={23} onClick={async () => { await handleDeleteContact(contact.id + '') }}/>
					</figure>
				</li>
			))}
		</ul>
	)
}
