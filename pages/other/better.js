import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  main: {
    paddingTop: '0px', // Adjust the top padding here
    paddingBottom: '50px',
  },
};

export default function Home() {
  return (
    <div className="container" style={styles.container}>
      <Head>
        <title>Which is better?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <p className="description">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeSnGzCLi2HTCmE6ziysPgjxkPK5ZBGf2TE5qbCquPXJP0WJA/viewform?embedded=true" width="640" height="420" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </p>

      </main>

       <Footer />
    </div>
  )
}
