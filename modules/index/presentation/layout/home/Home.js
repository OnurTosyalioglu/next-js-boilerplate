import {Fragment, useEffect, } from 'react'
import {useTranslation} from 'next-i18next'
import {useRouter} from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

const Home = (props) => {  
	const { t } = useTranslation('')
	const router = useRouter()

	useEffect(() => {

	})

	return <Fragment>

		</Fragment>
}

Home.props = props
Home.defaultProps = defaultProps

export default Home


