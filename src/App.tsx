import React from 'react'
import { ClientProvider } from './contexts/ClientContext'
import { MainRoutes as Routes } from './routes/MainRoutes'

export function App() {
	return (
		<ClientProvider>
			<Routes/>
		</ClientProvider>
	)
}
