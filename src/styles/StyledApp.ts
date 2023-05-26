import { styled } from 'styled-components'

export const StyledApp = styled.div`
	max-width: 1200px;
	width: 100vw;
	height: 100vh;
	margin: 0 auto;
	padding: 0 1rem;

	header {
		height: 80px;
		width: 100%;
		margin-bottom: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h1 {
			font-size: 24px;
			font-weight: 500;
			line-height: 1.15;
		}

		div {
			display: flex;
			flex-direction: column;
			gap: 5px;

			p {
				display: flex;
				align-items: center;
				gap: 8px;
			}
		}
	}

	h2 {
		font-size: 20px;
		font-weight: 700;
	}

	main {
		margin-top: 40px;
		display: flex;
		justify-content: space-between;
		
	}

	ul {
		height: 94px;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 15px;

		li {
			width: 320px;
			display: flex;
			align-items: center;
			gap: 15px;
			border-radius: 6px;
			background-color: #585858;

			figure svg{
				margin-left: 16px;
			}
			
			div {
				width: -webkit-fill-available;
				padding: 8px 16px;
				border-radius: 0 6px 6px 0;
				background-color: #afafaf;

				p {
					display: flex;
					align-items: center;
					gap: 8px;
					line-height: 1.5;
					color: #26262C;
				}

				.clientName {
					font-size: 20px;
					font-weight: 500;
				}
			}
		}
	}

	section {
		width: 35%;
		padding: 16px;
		border-radius: 6px;
		background-color: #383838;
		position: sticky;

		h3 {
			font-size: 20px;
			font-weight: 700;
			margin-bottom: 20px;
		}

		form {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 15px;
			
			fieldset {
				display: flex;
				flex-direction: column;
				gap: 4px;

				input {
					height: 40px;
					padding: 12px;
					border-radius: 6px;
					background-color: #585858;
					outline: none;
				}
				
				input:focus {
					background-color: #afafaf;
				}

				input::placeholder {
					color: #afafaf;
				}

				input:focus::placeholder {
					color: #585858;
				}
			}

			button {
				height: 40px;
				border-radius: 6px;
				background-color: #afafaf;
				font-size: 18px;
			}
			
			button:hover {
				background-color: #cbcbcb;
			}
		}
	}
`
