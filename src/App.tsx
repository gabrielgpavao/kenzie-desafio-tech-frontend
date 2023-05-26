import React from 'react'
import { ClientProvider } from './contexts/ClientContext'
import { CgProfile } from 'react-icons/cg'
import { MdEmail } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { StyledApp } from './styles/StyledApp'

export function App() {
	return (
		<ClientProvider>
			<StyledApp>
				<header>
					<h1>Desafio Tech<br/>Full Stack</h1>
					<div>
						<p><MdEmail size={18}/>gabriel@mail.com</p>
						<p><BsTelephone size={15}/>12345678901</p>
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
			</StyledApp>
		</ClientProvider>
	)
}
