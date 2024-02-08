import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  main: {
    paddingTop: "0px", // Adjust the top padding here
    paddingBottom: "50px",
  },
};

export default function Home() {
  return (
    <div className="container" style={styles.container}>
      <Head>
        <title>Character Key</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Header title='Protagonists/Main Characters:' />
        <h3>Shelly Quintas</h3>
        <p className="description">
          Green-eyed blonde with short, wildly cut hair. Incredibly insulting,
          always the first to point a flaw out. But don’t cast her out as
          annoying, because her insults always come in handy, and she’s hesitant
          to insult those who know her well. Wears ripped jeans, jean shorts,
          tank tops, and army green sweaters.
        </p>
        <h3>Skizz Zerby</h3>
        <p>
          He got his odd nickname because he sizzles in the sun like an egg in a
          frying pan. His given name is Sivak. He can always find something to
          laugh at and loves giving people hugs. Wears clothing such as
          oversized pants and tight shirts, often with baggy or no-sleeve
          sweaters.
        </p>
        <h3>Graham Cracker (Cracker, Cracked, or S’mores)</h3>
        <p>
          His name is Elliott Gordon Graham, and his nickname sums up him. He’s
          clumsy and loud, almost always messing things up, but for some reason,
          he’s great at fixing and noticing when something is slightly off.
          Wears clothing such as shorts(only shorts with pockets, despises pants
          and leggings for some reason) and very oversized jackets, coats,
          sweaters, and shirts. He has an uncanny sense of time.
        </p>
        <h3>Canary Yuri</h3>
        <p>
          The most normal out of the group. He’s a bit quiet, and he doesn’t
          socialize much. He’s passionate and intelligent, always pointing out
          common sense. He would be the “teacher’s pet” if he were to interact
          with teachers more. He wears a wide variation of clothing, but almost
          always wears a sweater.
        </p>
        <Header title="Side Characters:" />
        <h3>Maxwell Mejia</h3>
        <p>
          Awkward rich kid. The only reason the main characters originally
          became friends with him was that he could buy things for them, but
          eventually, they began to like him.
        </p>
        <h3>Timothy Quintas</h3>
        <p>Shelly Quintas’s father.</p>
        <Header title="Antagonists/Villains:" />
        <h3>Egghead</h3>
        <p>The ghost the protagonists encounter.</p>
      </main>

      <Footer />
    </div>
  );
}
