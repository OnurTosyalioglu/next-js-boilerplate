import { Fragment, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Faq from '../modules/index/presentation/layout/faq/Faq'

const Faq = props => {
  const { t } = useTranslation('index')

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
      ...(await serverSideTranslations(context.locale)),
    },
  }
}

export default Faq


