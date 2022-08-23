import '../style/globals.css'
import AuthProvider from '../modules/auth/presentation/context/auth.provider'
import AuthStateChanged from '../modules/auth/presentation/context/AuthStateChanged'
import Navbar from '../modules/main/presentation/component/navbar/Navbar'
import Footer from '../modules/main/presentation/component/footer/Footer'
import {appWithTranslation} from 'next-i18next'

const App = ({ Component, pageProps }) => {
	return <AuthProvider>
		<AuthStateChanged>
			<Navbar />
			<Component {...pageProps} />
			<Footer />
		</AuthStateChanged>
	</AuthProvider>
}

export default appWithTranslation(App)
