import { CgProfile } from 'react-icons/cg'
import { MdEmail, MdOutlineEdit } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useContact } from '../../hooks/useContact'
import { EditContactModal } from '../EditContactModal/EditContactModal'

export function ContactsList() {
	const { contactsList, deleteContact, listContacts, contactToEdit, setContactToEdit, isEditContactModalOpen, setIsEditContactModalOpen } = useContact()

	async function handleDeleteContact(contactId: string) {
		await deleteContact(contactId)
		await listContacts()
	}

	return (
		<>
			{isEditContactModalOpen && <EditContactModal contactInfo={contactToEdit}/>}

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
							<MdOutlineEdit size={25} onClick={() => { setContactToEdit(contact); setIsEditContactModalOpen(true) }}/>
							<RiDeleteBinLine size={23} onClick={async () => { await handleDeleteContact(contact.id + '') }}/>
						</figure>
					</li>
				))}
			</ul>
		</>
	)
}
