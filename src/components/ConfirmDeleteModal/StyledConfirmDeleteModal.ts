import { styled } from 'styled-components'

export const StyledConfirmDeleteModal = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h3 {
		font-size: 22px;
		margin-bottom: 20px;
	}

	div {
		display: flex;
		gap: 10px;

		button {
			height: 40px;
			width: 120px;
			border-radius: 6px;
			font-weight: 500;
			font-size: 18px;
		}

		button + button {
			background-color: #f20;
			color: #f6f6f6;
		}
	}
`
