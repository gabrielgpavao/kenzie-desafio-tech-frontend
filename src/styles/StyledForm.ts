import { styled } from 'styled-components'

export const StyledForm = styled.form`
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

`
