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
        <title>New Tab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
      <form method="GET" action="https://www.google.com/search">
        <input name="q" type="text"></input>&nbsp;
        <input type="submit" value="Search"></input>
      </form>
        <p className="description">
          <a href="https://github.com/niiccoo2/">Github</a>
          &nbsp;<a href="https://classroom.google.com/">Classroom</a>
          &nbsp;<a href="https://calendar.google.com/calendar/u/1/r">Calendar</a>
          &nbsp;<a href="https://vclock.com/timer/">Timer</a>
        </p>
        
      </main>

       <Footer />
    </div>
  )
}
