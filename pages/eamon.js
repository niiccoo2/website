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
        <img src="data:image/jpeg;base64,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" width="400" height="300"/>
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
