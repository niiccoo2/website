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
        <p>
          To contact the author of a story email <a href="mailto:contact@nic0.win">contact@nic0.win</a> with the subject as the title of the story that your message is about.
        </p>
        <Header title="Dylan Oalman:" />
        <p className="description">
          <a href="Story-AlgonquinWilderness">A Night in the Algonquin Wilderness</a>
        </p>
        
      </main>

       <Footer />
    </div>
  )
}
