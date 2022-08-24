import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'
import { MdMenu } from 'react-icons/md'

const Sidebar = props => {
  const { t } = useTranslation('')
  const router = useRouter()

  useEffect(() => {})

	return <Fragment>
			<div className="col-span-1 visible tablet:invisible items-center">
				<MdMenu />
			</div>
		</Fragment>
}

Sidebar.props = props
Sidebar.defaultProps = defaultProps

export default Sidebar
