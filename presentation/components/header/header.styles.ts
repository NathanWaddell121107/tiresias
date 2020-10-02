import styled from 'styled-components'

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const HeaderOuterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #dedede;
	position: relative;
	z-index: 100;
	opacity: 0.7;
	padding: 2rem;
	@media (max-width: 768px) {
		padding: 0.785rem 1.25rem;
	}
`

export const HeaderLogo = styled.div`
	cursor: pointer;
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
	@media (max-width: 768px) {
		display: none;
	}
`

export const IconWrapper = styled.div`
	@media (min-width: 770px) {
		display: none;
	}
`

export const MobileHeaderMenuItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin-top: 1rem;
	> a {
		text-decoration: none;
		color: #000;
		padding: 0.5rem 0;
		border-top: 1px solid black;
		&:hover {
			color: #28bafd;
		}
	}
`

export const HeaderLink = styled.a`
	cursor: pointer;
`
