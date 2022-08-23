import '../style/globals.css'
import AuthProvider from '../modules/auth/presentation/context/auth.provider'
import AuthStateChanged from '../modules/auth/presentation/context/AuthStateChanged'

const App = ({ Component, pageProps }) => {
	return <AuthProvider>
		<AuthStateChanged>
			<Component {...pageProps} />
		</AuthStateChanged>
	</AuthProvider>
}

export default App
