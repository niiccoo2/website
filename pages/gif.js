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
        <title>GIF</title>
        <link rel="icon" href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ABlinking_warning.gif&psig=AOvVaw1ZM8gvVNzVSar6eDOlQ7D1&ust=1705595988480000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIi20qru5IMDFQAAAAAdAAAAABAD" />
      </Head>

      <main style={styles.main}>
        <p>GIF using file:</p>
        <img src="test.gif" width="400" height="300"/>
        <p>GIF using link:</p>
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/5eeea355389655.59822ff824b72.gif" width="400" height="300"/>
      </main>

       <Footer />
    </div>
  )
}
