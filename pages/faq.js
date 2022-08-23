import { Fragment, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@nextui-org/react'
import Faq from '../modules/index/presentation/layout/faq/Faq'

const Faq = props => {
  const { t } = useTranslation('index')
  const { theme } = useTheme()

  useEffect(() => {})

  return (
    <Fragment>
      <Layout />
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        'index',
      ])),
    },
  }
}

export default Faq


