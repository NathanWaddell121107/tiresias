import React, { useState } from 'react'
import * as Styled from './header.styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

interface Props {
	toggleModal?: () => void
}

const Header: React.FC<Props> = ({ toggleModal }) => {
	const [navMenuIsOpen, setNavMenuIsOpen] = useState(false)
	const toggleNav = () => setNavMenuIsOpen(!navMenuIsOpen)
	return (
		<>
			<Styled.HeaderOuterWrapper>
				<Styled.HeaderWrapper>
					<Link href="/">
						<Styled.HeaderLogo>TIRESIAS</Styled.HeaderLogo>
					</Link>
					<Styled.HeaderMenuItems>
						<Link href="/charts">Charts</Link>
						<Link href="#">Portfolio</Link>
						<Styled.HeaderLink onClick={toggleModal}>Login</Styled.HeaderLink>
					</Styled.HeaderMenuItems>
					<Styled.IconWrapper>
						<FontAwesomeIcon width="20px" icon={faBars} onClick={() => toggleNav()} />
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
