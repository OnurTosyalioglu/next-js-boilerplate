import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

import Sidebar from '../sidebar/Sidebar'
import Logo from '../logo/Logo'
import Name from '../name/Name'
import Navmenu from '../navmenu/Navmenu'
import Auth from '../auth/Auth'
import LocaleSwitch from '../localeSwitch/LocaleSwitch'
import Notification from '../notification/Notification'
import Profile from '../profile/Profile'

// import useAuth from '../../../../auth/presentation/context/use.auth'

const Navbar = props => {
  const { t } = useTranslation('main')
  const router = useRouter()
  // const { user, } = useAuth()

  useEffect(() => {})

  return (
    <Fragment>
      <div className={'grid grid-cols-12 justify-items-center content-center h-16 place-content-center'}>
        <Sidebar />
        <Logo />
        <Name />
        <Navmenu />
        <Auth />
        <Profile />
        <Notification />
        <LocaleSwitch />
      </div>
    </Fragment>
  )
}

Navbar.props = props
Navbar.defaultProps = defaultProps

export default Navbar
