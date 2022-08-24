import { Fragment, useEffect } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

import props from './props'
import defaultProps from './props.default'
import styles from './styles.module.css'

import { MdAccountCircle } from 'react-icons/md'

const Profile = props => {
  const { t } = useTranslation('main')
  const router = useRouter()

  useEffect(() => {})

  return (
    <Fragment>
      <div className={'col-span-1 items-center content-center flex'}>
        <div className={'dropdown'} tabIndex={'0'}>
          <label className='flex place-content-center items-center content-center' tabIndex={'0'}>
						<MdAccountCircle className={'text-3xl flex place-content-center items-center'}/>
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

Profile.props = props
Profile.defaultProps = defaultProps

export default Profile
