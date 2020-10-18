import { AppProps } from 'next/app'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'

export const MyApp = (props: AppProps) => {
	return (
		<>
			<Head>
				<link href="https://use.fontawesome.com/releases/v5.12.1/css/svg-with-js.css" rel="stylesheet" />
			</Head>
			<props.Component {...props.pageProps} />
		</>
	)
}

export default MyApp
