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
        <title>Italan</title>
        <link rel="icon" href="/italy.ico" />
      </Head>

      <main style={styles.main}>
        <h1>Italian</h1>
        <a href="italian/catania-magazine">Magazine</a><br></br>
      </main>

       <Footer />
    </div>
  )
}
