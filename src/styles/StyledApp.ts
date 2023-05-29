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

			small {
				display: block;
				margin-top: 4px;
				cursor: pointer;
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
			justify-content: center;
			border-radius: 6px;
			background-color: #585858;
			
			div {
				width: -webkit-fill-available;
				padding: 8px 10px;
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

			figure {
				width: 80px;
				display: grid;
				place-items: center;
			}
			
			.icons {
				width: 60px;
				display: flex;
				flex-direction: column;
				gap: 20px;

				svg {
					cursor: pointer;
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
	}
`
