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
        <title>Examples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Header title="Examples:" />
        <p style={{ textAlign: 'center' }}>
          Some HTML examples!<br></br>
          This is a paragraph!
        </p>
        <h1>Huge Header</h1>
        <h2>Big Header</h2>
        <h3>Medium Header</h3>
        <h4>Small Header</h4>
        <h5>Tiny Header</h5>
        <h6>Pico Header</h6>

        <h2>This is a unordered list:</h2>
        <ul>
          <li>I am a list element!</li>
          <li>I am another list element!</li>
          <li>I am the last element... :(</li>
        </ul>

        <h2>This is a ordered list:</h2>
        <ol>
          <li>I am number one!</li>
          <li>I am number two!</li>
          <li>I am number three!</li>
        </ol>
        <h2>This is a table:</h2>
        <table border="1">
        <tr>
        <th></th><th>USA</th><th>UK</th>
        </tr>
        <tr>
        <th>Road Side</th><td>Right Side</td><td>Left Side</td>
        </tr>
        <tr>
        <th>Units</th><td>MPH</td><td>KPH</td>
        </tr>
        </table>

      </main>

       <Footer />
    </div>
  )
}
