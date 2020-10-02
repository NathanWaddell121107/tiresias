import React from 'react'
import Charts from '../presentation/components/charts'
import { GlobalStyle } from '../presentation/components/global-theme'
import Header from '../presentation/components/header'

const ChartsPage: React.FC = () => {
	return (
		<>
			<GlobalStyle />
			<Header />
			<Charts />
		</>
	)
}

export default ChartsPage
