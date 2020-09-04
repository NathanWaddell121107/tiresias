import React from 'react'
import Header from '../header'
import Particles, { IParticlesParams } from 'react-particles-js'
import { getPolygonConfig } from '../../helpers/polygon-config'

const MainPage = () => {
	return (
		<>
			<Header />
			<Particles style={{ position: 'fixed', top: 0 }} params={getPolygonConfig() as IParticlesParams} />
		</>
	)
}

export default MainPage
