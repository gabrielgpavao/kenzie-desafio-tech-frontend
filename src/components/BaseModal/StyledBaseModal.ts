import styled from 'styled-components'

export const StyledBaseModal = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	background-color: #26262ca8;
	backdrop-filter: blur(15px);

	> section {
		width: 100%;
		max-width: 400px;
		padding: 20px;
		border-radius: 6px;
		background-color: #1b1b1e;
	}
`
