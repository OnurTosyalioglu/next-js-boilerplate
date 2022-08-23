mkdir -p $1

echo "import {Fragment, useEffect, } from 'react'
import {useTheme} from '@nextui-org/react'
import {useTranslation} from 'next-i18next'
import {useRouter} from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

import {
	Grid,
	Text,
	Container,
} from '@nextui-org/react'

const $2 = (props) => {  
	const { theme } = useTheme()
	const { t } = useTranslation('')
	const router = useRouter()

	useEffect(() => {

	})

	return <Fragment>

		</Fragment>
}

$2.props = props
$2.defaultProps = defaultProps

export default $2

" > $1/$2.js

echo "import propTypes from 'prop-types'

export default {

}
" > $1/props.js

echo "export default {

}
" > $1/props.default.js

echo "@media screen and (max-width: 600px) {

}

@media screen and (min-width: 600px) and (max-width: 900px){

}

@media screen and (min-width: 900px) and (max-width: 1200px){

}

@media screen and (min-width: 1200px) and (max-width: 1536px){

}

@media screen and (min-width: 1536px) {
	
}
" > $1/styles.module.css
