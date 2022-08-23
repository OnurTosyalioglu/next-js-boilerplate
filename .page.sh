echo "import { Fragment, useEffect } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@nextui-org/react'

const $2 = props => {
  const { t } = useTranslation('')
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

export default $2

" > $1/$2.js
