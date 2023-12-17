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
        <title>Nicos Website!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Header title="Links:" />
        <p className="description">
          Github: <a href="https://github.com/niiccoo2/" target="_blank" rel="noopener noreferrer">github.com/niiccoo2</a>
          <br />
        </p>
        <Header title="Projects:" />
        <p style={{ textAlign: 'center' }}>
          <a href="storys">Storys</a><br></br>
          <a href="ndx">NDX</a><br></br>
        </p>
        <Header title="About:" />
        <p className="description">
          Me, Myself, and I are good friends!
        </p>
        <Header title="Photos:" />
        <p className="description">
          <img src="photo.JPG" width="400" height="266"/>
        </p>
        
        
      </main>

       <Footer />
    </div>
  )
}
