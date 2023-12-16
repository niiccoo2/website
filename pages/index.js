import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nicos Website!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Nicos app!" />
        <p className="description">
          Nicos website is cool!
        </p>
      </main>

      <Footer />
    </div>
  )
}
