import Head from 'next/head'

import { FC } from '~/shared/types'

export const Seo: FC<{ title: string }> = ({ title }) => {
  return (
    <Head>
      <title key="title">{title} · Ajit Singh</title>
    </Head>
  )
}
