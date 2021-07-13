import { ReactNode } from 'react'
import Head from 'next/head'
import SEO, { SEOProps } from '@components/seo'
import Header from '@components/header'
import Navigation from '@components/navigation'
import { metadata as siteMeta } from 'config'

type PageProps = {
  meta?: SEOProps
  children?: ReactNode
}

const Page = ({ meta, children }: PageProps) => {
  return (
    <>
      <SEO {...meta} />
      <main>
        <Header />
        <Navigation />
        {children}
      </main>
    </>
  )
}

export default Page
