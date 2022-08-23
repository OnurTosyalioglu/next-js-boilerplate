import {Fragment, useEffect, } from 'react'
import {useTranslation} from 'next-i18next'
import {useRouter} from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const AboutUs = (props) => {  
	const { t } = useTranslation('')
	const router = useRouter()

	useEffect(() => {

	})

	return <Fragment>

		</Fragment>
}

AboutUs.props = props
AboutUs.defaultProps = defaultProps

export default AboutUs


