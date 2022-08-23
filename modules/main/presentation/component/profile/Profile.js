import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Profile = props => {
  const { t } = useTranslation('')
  const router = useRouter()

  useEffect(() => {})

  return <Fragment></Fragment>
}

Profile.props = props
Profile.defaultProps = defaultProps

export default Profile
