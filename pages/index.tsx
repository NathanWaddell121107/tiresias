import Head from 'next/head'
import MainPage from '../presentation/components/main-page'
import { GlobalStyle } from '../presentation/components/global-theme'
import Header from '../presentation/components/header'
import { useState } from 'react'
import Login from '../presentation/components/login'

export default function Home() {
	const [modalOpen, setModalOpen] = useState(false)
	const toggleModal = () => setModalOpen(!modalOpen)
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Tiresias</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header toggleModal={toggleModal} />
			<MainPage />
			<Login toggleModal={toggleModal} modalOpen={modalOpen} />
		</>
	)
}
