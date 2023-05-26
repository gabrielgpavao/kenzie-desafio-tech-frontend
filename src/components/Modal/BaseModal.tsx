import React from 'react'
import { createPortal } from 'react-dom'
import { StyledBaseModal } from './StyledBaseModal'

export function BaseModal({ children }: { children: React.ReactNode}) {
	return createPortal(
		<StyledBaseModal>
			<section>
				{children}
			</section>
		</StyledBaseModal>,
		document.body
	)
}
