import React from 'react'
import { createPortal } from 'react-dom'

export function BaseModal({ children }: { children: React.ReactNode}) {
	return createPortal(
		<div>
			<section>
				{children}
			</section>
		</div>,
		document.body
	)
}
