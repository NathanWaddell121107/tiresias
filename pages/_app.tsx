import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'

export const MyApp = (props: AppProps) => {
	return <props.Component {...props.pageProps} />
}

export default MyApp
