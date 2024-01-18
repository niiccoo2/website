import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    padding: '0px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  main: {
    paddingTop: '0px', // Adjust the top padding here
    paddingBottom: '25px',
  },
};

export default function Home() {
  return (
    <div className="container" style={styles.container}>
      <Head>
        <title>Nicos Website!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.left}>
        <h1>About:</h1>
        <p>
          Me, Myself, and I are good friends!
        </p>
        <h1>Links:</h1>
        <p>
          Github: <a href="https://github.com/niiccoo2/" target="_blank" rel="noopener noreferrer">github.com/niiccoo2</a>
          <br />
        </p>
        <h1>Projects:</h1>
        <p style={{ textAlign: 'center' }}>
          <a href="better">Which is better</a><br></br>
          <a href="start">Start Page</a><br></br>
          <a href="example">Examples</a><br></br>
          <a href="storys">Storys</a><br></br>
          <a href="ndx">NDX</a><br></br>
          <a href="car">RC Cars</a><br></br>
          <a href="cats">Cats</a><br></br>
          <a href="eamon">Eamon</a><br></br>
        </p>
        
        <h2>Want a link shortened?</h2>
        <p style={{ textAlign: 'center' }}>
          Use the form below to tell me the link you want shortened and what you want the shortened link to be! (go.nic0.win/anythingyouwant)
        </p>
        <p>Contact:</p>
        <form name="email" method="POST" data-netlify="true">
          <p>
            <label>Name: <input type="text" name="name" /></label>
          </p>
          <p>
            <label>Email: <input type="email" name="email" /></label>
          </p>
          <p>
            <label>Message: <input type="text" name="message" /></label>
          </p>
          <p>
            <input type="hidden" name="form-name" value="email" />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>

        <h1>Photos:</h1>
        <p className="description">
          <img src="photo.JPG" width="400" height="266"/>
        </p>
      </main>

       <Footer />
    </div>
  )
}
