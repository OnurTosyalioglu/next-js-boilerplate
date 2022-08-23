import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Password = props => {
  const { t } = useTranslation('auth')
  const router = useRouter()

  useEffect(() => {})

	return <Fragment>
			<div className={''}>
				<input type={'text'} name={'email'}/>
			</div>
		</Fragment>
}

Password.props = props
Password.defaultProps = defaultProps

export default Password
