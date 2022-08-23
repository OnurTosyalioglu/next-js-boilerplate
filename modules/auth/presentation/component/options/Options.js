import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Options = props => {
  const { t } = useTranslation('auth')
  const router = useRouter()

  useEffect(() => {})

	return <Fragment>
			<div>
				<button>
					{props.text}
				</button>
			</div>
		</Fragment>
}

Options.props = props
Options.defaultProps = defaultProps

export default Options
