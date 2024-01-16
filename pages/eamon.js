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
        <Header title="Eamon" />
        <p>This is Eamon!</p>
        <img src="eamon.jpg" width="400" height="300"/>
        <p>Eamon is:</p>
        <ul>
          <li>Good</li>
          <li>Acceptable</li>
          <li>Excellent</li>
          <li>Exceptional</li>
          <li>Favorable</li>
          <li>Great</li>
          <li>Marvelous</li>
          <li>Positive</li>
          <li>Satisfactory</li>
          <li>Superb</li>
          <li>Valuable</li>
          <li>Wonderful</li>
        </ul>
        
      </main>

       <Footer />
    </div>
  )
}
