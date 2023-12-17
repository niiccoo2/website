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
        <title>Scary Storys</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Header title="Scary Storys" />
        <p className="description">
          These are some short Scary Storys sorted by Author!
        </p>
        <Header title="Dylan Oalman" />
        <p className="description">
          <a href="ANightInAlgonquin">A Night in Algonquin</a>
        </p>
        
      </main>

       <Footer />
    </div>
  )
}
