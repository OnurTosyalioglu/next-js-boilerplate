import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Row = props => {
  const { t } = useTranslation('')
  const router = useRouter()

  useEffect(() => {})

  return <Fragment></Fragment>
}

Row.props = props
Row.defaultProps = defaultProps

export default Row
