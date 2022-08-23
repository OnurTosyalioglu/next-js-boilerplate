import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const ContinueWithGoogle = props => {
  const { t } = useTranslation('auth')
  const router = useRouter()

  useEffect(() => {})

	return <Fragment>
			<div>
				<button>
					{t('continueWithFacebok')}
				</button>
			</div>
		</Fragment>
}

ContinueWithGoogle.props = props
ContinueWithGoogle.defaultProps = defaultProps

export default ContinueWithGoogle
