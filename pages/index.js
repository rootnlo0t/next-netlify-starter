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
        <Header title="ROOT N LOOT" />
    <img src="https://images.playground.com/201a9fedc25e4e89988ddf1ff3ffa776.jpeg" />
      </main>

      <Footer />
    </div>
  )
}
