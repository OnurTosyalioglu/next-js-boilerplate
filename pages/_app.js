import '../style/globals.css'
import { Fragment } from 'react'
// import AuthProvider from '../modules/auth/presentation/context/auth.provider'
// import AuthStateChanged from '../modules/auth/presentation/context/AuthStateChanged'
import Navbar from '../modules/main/presentation/component/navbar/Navbar'
import Footer from '../modules/main/presentation/component/footer/Footer'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from 'next-themes'

const App = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <ThemeProvider defaultTheme={'light'}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </Fragment>
  )
}

export default appWithTranslation(App)
