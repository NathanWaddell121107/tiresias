import Head from 'next/head'
import MainPage from '../presentation/components/main-page'
import { GlobalStyle } from '../presentation/components/global-theme'

export default function Home() {
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Tiresias</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainPage />
		</>
	)
}
