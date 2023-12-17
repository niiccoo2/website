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
        <Header title="Links:" />
        <p className="description">
          Test
          <br></br>
        </p>
      </main>

       <Footer />
    </div>
  )
}
