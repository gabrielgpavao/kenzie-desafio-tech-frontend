import React from 'react'
import { ClientProvider } from './contexts/ClientContext'

export function App() {
	return (
		<ClientProvider>
			<header>
				<h1>Desafio Tech</h1>
				<div>
					<p>Name: <span>Gabriel Galvão Pavão</span></p>
					<p>Email: <span>gabriel@mail.com</span></p>
					<p>Telefone: <span>12345678901</span></p>
				</div>
			</header>
		</ClientProvider>
	)
}
