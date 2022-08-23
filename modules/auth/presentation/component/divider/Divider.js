import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Divider = props => {
  const { t } = useTranslation('auth')
  const router = useRouter()

  useEffect(() => {})

	return <Fragment>
			<div>
				<div>
				</div>
				<div>
					{t('or')}
				</div>
				<div>
				</div>
			</div>
		</Fragment>
}

Divider.props = props
Divider.defaultProps = defaultProps

export default Divider
