import React from 'react'
import * as Styled from './header.styles'

const Header = () => {
	return (
		<>
			<Styled.HeaderWrapper>
				<Styled.HeaderLogo>TIRESIAS</Styled.HeaderLogo>
				<Styled.HeaderMenuItems>
					<a href="#">Charts</a>
					<a href="#">Portfolio</a>
					<a href="#">Account</a>
				</Styled.HeaderMenuItems>
			</Styled.HeaderWrapper>
		</>
	)
}

export default Header
