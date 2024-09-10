import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Nabla } from "next/font/google";

const nabla = Nabla({
  subsets: ["latin"],
});

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    padding: "0px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  main: {
    paddingTop: "0px", // Adjust the top padding here
    paddingBottom: "25px",
    backgroundImage: "url(backround.jpg)",
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
        <h1 className={nabla.className}>NICO'S WEBSITE!</h1>
        <h1>About:</h1>
        <p>Me, Myself, and I are good friends!</p>
        <h1>Links:</h1>
        <p>
          Github:{" "}
          <a
            href="https://github.com/niiccoo2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/niiccoo2
          </a>
          <br />
        </p>
        <h1>Projects:</h1>
        <p style={{ textAlign: "center" }}>
          <a href="example">Examples</a>
          <br></br>
          <a href="italian">Italian</a>
          <br></br>
          <a href="stories">Books</a>
          <br></br>
          <a href="other">Other Projects</a>
          <br></br>
        </p>

        <h1>Photos:</h1>
        <p className="description">
          <img src="photo.JPG" width="400" height="266" />
        </p>
      </main>

      <Footer />
    </div>
  );
}
