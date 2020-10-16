import React from 'react'
import Particles, { IParticlesParams } from 'react-particles-js'
import { getPolygonConfig } from '../../helpers/polygon-config'
import * as Styled from './main-page.styles'

const MainPage = () => {
	return (
		<>
			<Particles style={{ position: 'fixed', top: 0 }} params={getPolygonConfig() as IParticlesParams} />
			<Styled.MainPageTitle>
				<h1>CRYPTOCURRENCY ANALYSIS</h1>
				<h1>SIMPLIFIED</h1>
			</Styled.MainPageTitle>
		</>
	)
}

export default MainPage
