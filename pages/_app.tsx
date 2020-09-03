import '../styles/globals.css'
import { AppProps } from 'next/app'

export const MyApp = (props: AppProps) => {
	return <props.Component {...props.pageProps} />
}

export default MyApp
