import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

import routes from '../../../../../route/routes'

const Auth = props => {
  const { t } = useTranslation()
  const router = useRouter()

  useEffect(() => {})

  return (
    <Fragment>
      <div className={'col-span-2 place-self-center hidden tablet:flex'}>
        <Link href={routes.auth.login}>
          <button
            className={
              'btn btn-outline text-xs mr-4'
            }
          >
            {t('login')}
          </button>
        </Link>
        <Link href={routes.auth.signup}>
          <button
            className={'btn btn-outline text-xs'}
          >
            {t('signup')}
          </button>
        </Link>
      </div>
    </Fragment>
  )
}

Auth.props = props
Auth.defaultProps = defaultProps

export default Auth
