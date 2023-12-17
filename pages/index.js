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
          Github: <a href="https://github.com/niiccoo2/" target="_blank">github.com/niiccoo2</a>
          <br></br>
        </p>
        <Header title="Projects:" />
        <p className="description">
          <a href="ndx">NDX</a>
          <br></br>
        </p>
        <Header title="About:" />
        <p className="description">
          Me, Myself, and I are good friends!
        </p>
        <Header title="Photos:" />
        <p className="description">
          <img src="redsox.jpg" width="400" height="266"/>
        </p>
      </main>

       <Footer />
    </div>
  )
}
