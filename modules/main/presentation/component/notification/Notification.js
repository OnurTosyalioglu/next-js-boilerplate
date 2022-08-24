import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'
import { MdNotifications } from 'react-icons/md'

const Notification = props => {
  const { t } = useTranslation('')
  const router = useRouter()

  useEffect(() => {})

  return (
    <Fragment>
      <div
        className={
          'col-span-1 items-center content-center hidden ipad:flex'
        }
      >
        <div className={'dropdown'} tabIndex={'0'}>
          <label
            className='flex place-content-center items-center content-center'
            tabIndex={'0'}
          >
            <MdNotifications
              className={
                'text-3xl flex place-content-center items-center'
              }
            />
          </label>
          <ul
            className={
              'dropdown-content menu p-2 shadow bg-white rounded-box w-32'
            }
          >
            <li className={'flex place-content-center'}>
              item
            </li>
            <li className={'flex place-content-center'}>
              item
            </li>
            <li className={'flex place-content-center'}>
              item
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  )
}

Notification.props = props
Notification.defaultProps = defaultProps

export default Notification
