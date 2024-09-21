import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="rooooOOOOOOOOt n loooo000t" />
    <img src="https://mykhilafah.com/wp-content/uploads/2017/07/alquds.jpg" />
      </main>

      <Footer />
    </div>
  )
}
