import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Confirmation = props => {
  const { t } = useTranslation('auth')
  const router = useRouter()

  useEffect(() => {})

  return <Fragment></Fragment>
}

Confirmation.props = props
Confirmation.defaultProps = defaultProps

export default Confirmation
