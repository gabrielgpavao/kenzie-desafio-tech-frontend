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
`
