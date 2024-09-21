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
    <img src="https://www.economist.com/cdn-cgi/image/width=834,quality=80,format=auto/content-assets/images/20231" />
      </main>

      <Footer />
    </div>
  )
}
