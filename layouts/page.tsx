import { ReactNode } from 'react'
import Head from 'next/head'
import Header from '@components/header'
import Navigation from '@components/navigation'

type PageProps = {
  children?: ReactNode
}

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Head>
        <title>All about NextJS</title>
      </Head>

      <main>
        <Header />
        <Navigation />
        {children}
      </main>
    </>
  )
}

export default Page
