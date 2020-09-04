import React, { useState } from 'react'
import * as Styled from './header.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
	const [navMenuIsOpen, setNavMenuIsOpen] = useState(false)
	const toggleNav = () => {
		setNavMenuIsOpen(!navMenuIsOpen)
	}
	return (
		<>
			<Styled.HeaderOuterWrapper>
				<Styled.HeaderWrapper>
					<Styled.HeaderLogo>TIRESIAS</Styled.HeaderLogo>
					<Styled.HeaderMenuItems>
						<a href="#">Charts</a>
						<a href="#">Portfolio</a>
						<a href="#">Account</a>
					</Styled.HeaderMenuItems>
					<Styled.IconWrapper>
						<FontAwesomeIcon icon={faBars} onClick={() => toggleNav()} />
					</Styled.IconWrapper>
				</Styled.HeaderWrapper>
				{navMenuIsOpen && (
					<Styled.MobileHeaderMenuItems>
						<a href="#">Charts</a>
						<a href="#">Portfolio</a>
						<a href="#" style={{ borderBottom: '1px solid black' }}>
							Account
						</a>
					</Styled.MobileHeaderMenuItems>
				)}
			</Styled.HeaderOuterWrapper>
		</>
	)
}

export default Header
