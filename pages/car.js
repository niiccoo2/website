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
    textAlign: 'left',
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
        <h1>RC cars:</h1>
        <p className="description">
          RC cars are fun because you can have all sorts of diffrent cars and trucks with diffrent sizes, you can also upgrade your car or truck and add things like FPV cams and GoPro's to your car or truck.
        </p>
        <h2>Maintenance:</h2>
        <p>
        If you own a RC car you will have to do mainteance on it every now and then. You will have to clean the car and make sure it is in good condition. Different types of cars have different maintenance needs. For example, a car that stays on the road will not need to be cleaned as much as a car that is in muddy conditions.
        </p>
        <h3>Types of cars:</h3>
        <ul style={{textAlign: 'left'}}>
          <li>Race cars</li>
          <li>Crawlers</li>
          <li>Army</li>
          <li>Drag Racing</li>
          <li>Small cars</li>
          <li>Big cars</li>
        </ul>
        <p className="description">
          <img src="car.jpg" width="400" height="165"/>
        </p>
      </main>

       <Footer />
    </div>
  )
}
