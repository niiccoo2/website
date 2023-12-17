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
        <title>Story Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Header title="Story Template" />
        <p className="description">
          Story Template
        </p>
        
      </main>

       <Footer />
    </div>
  )
}
