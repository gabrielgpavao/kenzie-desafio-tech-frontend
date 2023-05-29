import { CgProfile } from 'react-icons/cg'
import { MdEmail, MdOutlineEdit } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useContact } from '../../hooks/useContact'
import { EditContactModal } from '../EditContactModal/EditContactModal'
import { useClient } from '../../hooks/useClient'
import { ConfirmDeleteModal } from '../ConfirmDeleteModal/ConfirmDeleteModal'

export function ContactsList() {
	const { contactsList, deleteContact, listContacts, contactToEdit, setContactToEdit, isEditContactModalOpen, setIsEditContactModalOpen } = useContact()
	const { isConfirmDeleteModalOpen, setIsConfirmDeleteModalOpen } = useClient()

	async function handleDeleteContact() {
		await deleteContact(contactToEdit.id + '')
		await listContacts()
	}

	return (
		<>
			{isEditContactModalOpen && <EditContactModal contactInfo={contactToEdit}/>}
			{isConfirmDeleteModalOpen && <ConfirmDeleteModal callback={handleDeleteContact}/>}

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
							<RiDeleteBinLine size={23} onClick={async () => { setContactToEdit(contact); setIsConfirmDeleteModalOpen(true) }}/>
						</figure>
					</li>
				))}
			</ul>
		</>
	)
}
