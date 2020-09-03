import React from 'react'

const Header = () => {
	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between', padding: '2rem', backgroundColor: '#dedede' }}>
				<div style={{ width: '30%' }}>Tiresias</div>
				<div style={{ display: 'flex', justifyContent: 'space-evenly', width: '30%' }}>
					<a href="#">Charts</a>
					<a href="#">Portfolio</a>
					<a href="#">Account</a>
				</div>
			</div>
		</>
	)
}

export default Header
