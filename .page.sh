echo "import { Fragment, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

const $2 = props => {
  const { t } = useTranslation('')

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
      ...(await serverSideTranslations(context.locale,)),
    },
  }
}

export default $2

" > $1
