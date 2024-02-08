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
        <title>Other Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <h1>Other Projects</h1>
        <a href="other/eamon">Eamon</a><br></br>
        <a href="other/cats">Cats</a><br></br>
        <a href="other/car">RC Cars</a><br></br>
        <a href="other/ndx">NDX</a><br></br>
        <a href="stories">Stories</a><br></br>
        <a href="other/better">Which is better</a><br></br>
        
      </main>

       <Footer />
    </div>
  )
}
