import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	position: relative;
	z-index: 100;
	opacity: 0.7;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #dedede;
	padding: 2rem;
`

export const HeaderLogo = styled.div`
	width: 30%;
`

export const HeaderMenuItems = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 30%;
	> a {
		text-decoration: none;
		color: #000;
		&:hover {
			color: #28bafd;
		}
	}
`
