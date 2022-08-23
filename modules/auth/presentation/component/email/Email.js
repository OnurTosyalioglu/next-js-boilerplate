import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Email = props => {
  const { t } = useTranslation('auth')
  const router = useRouter()

  useEffect(() => {})

	return <Fragment>
		<div>
			<input type={'text'} name={'email'}/>
		</div>
		</Fragment>
}

Email.props = props
Email.defaultProps = defaultProps

export default Email
