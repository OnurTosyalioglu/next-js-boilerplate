import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const ContinueWithFacebook = props => {
  const { t } = useTranslation('')
  const router = useRouter()

  useEffect(() => {})

  return <Fragment></Fragment>
}

ContinueWithFacebook.props = props
ContinueWithFacebook.defaultProps = defaultProps

export default ContinueWithFacebook
