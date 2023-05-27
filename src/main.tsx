import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { GlobalStyles } from './styles/GlobalStyles.ts'
import { ClientProvider } from './contexts/ClientContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ClientProvider>
			<GlobalStyles/>
			<App />
		</ClientProvider>
	</React.StrictMode>
)
