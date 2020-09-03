import Head from 'next/head'
import MainPage from '../presentation/components/main-page'

export default function Home() {
	return (
		<>
			<Head>
				<title>Tiresias</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainPage />
		</>
	)
}
