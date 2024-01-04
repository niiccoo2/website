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
  td: {
    textAlign: 'center', // Center the text horizontally NOT WORKING
    verticalAlign: 'middle', // Center the content vertically
    border: '1px solid black', // Add border to the table cells
    padding: '8px', // Add padding to the table cells
  },
  blue: {
    textAlign: 'center',
    color: 'blue'
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
          <tbody>
            <tr>
            <th></th><th>USA</th><th>UK</th>
            </tr>
            <tr>
            <th>Road Side</th><td>Right Side</td><td>Left Side</td>
            </tr>
            <tr>
            <th>Units</th><td>MPH</td><td>KPH</td>
            </tr>
          </tbody>  
        </table>
        <h2>This is a photo:</h2>
        <img src="bob.jpeg" width="400" height="300"/>
        <h2>This is a video:</h2>
        <video controls width="400">
          <source src="./file_example_MP4_1280_10MG.webm" type="video/webm" />
        </video>
        <h2>This is a Youtube video:</h2>
        <iframe width="425" height="240" src="https://www.youtube.com/embed/qxS-uuokt5g" title="Everything New In BeamNG Drive 0.31" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <h2>This is some audio:</h2>
        <audio controls src="./file_example_MP3_1MG.mp3">
          <a href="./file_example_MP3_1MG.mp3"> Download audio </a>
        </audio>
        <h2>These are different symbols:</h2>
        <p>'&amp;' symbol:</p>
        <code>&‎amp;</code>
        <h2>This is some code:</h2>
        <code>
          num=input("What number?")<br></br>
          num=num+5<br></br>
          print(num)
        </code>
        <h2>This is a form:</h2>
        <form name="contact" method="POST" data-netlify="true">
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
            <input type="hidden" name="form-name" value="contact" />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
          <h2 style={{ textAlign: 'center' }}>This is color text:</h2>
          <p style={styles.blue}>Blue using styles.</p>
          <p style={{color: 'red', textAlign: 'center'}}>Red using styles in the header.</p>
        </form>

      </main>

       <Footer />
    </div>
  )
}
