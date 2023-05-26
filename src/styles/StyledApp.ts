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
		width: 40%;

		li {
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
`
