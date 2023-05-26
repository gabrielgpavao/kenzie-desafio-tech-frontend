import React from 'react'
import { ClientProvider } from './contexts/ClientContext'
import { CgProfile } from 'react-icons/cg'

export function App() {
	return (
		<ClientProvider>
			<header>
				<h1>Desafio Tech</h1>
				<div>
					<p>Nome: <span>Gabriel Galvão Pavão</span></p>
					<p>Email: <span>gabriel@mail.com</span></p>
					<p>Telefone: <span>12345678901</span></p>
				</div>
			</header>

			<h2>Seus Contatos</h2>
			<main>
				<ul>
					<li>
						<CgProfile/>
						<div>
							<p>Nome: <span>André Gomes</span></p>
							<p>Email: <span>andre@mail.com</span></p>
							<p>Telefone: <span>12345678901</span></p>
						</div>
					</li>
				</ul>
			</main>

			<section>
				<h3>Adicionar novo contato</h3>
				<form>
					<label htmlFor='fullName'>Nome Completo</label>
					<input id='fullName' type='text' placeholder='Digite o nome completo...'/>

					<label htmlFor='email'>Email</label>
					<input id='email' type='email' placeholder='Digite o email...'/>

					<label htmlFor='phoneNumber'>Telefone</label>
					<input id='phoneNumber' type='text' placeholder='Digite o telefone...'/>

					<button type='submit'>Adicionar</button>
				</form>
			</section>
		</ClientProvider>
	)
}
