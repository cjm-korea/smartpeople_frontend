import Head from 'next/head'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <h1 className="static text-3xl font-bold underline bg-slate-400">
          Hello world!
        </h1>


      </Layout>
    </>
  )
}
