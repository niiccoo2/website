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
        <title>Story Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Header title="Phantompeak" />
        <p style={{ textAlign: "center" }}>By: Dylan Oalmann</p>
        <p>
          The trip we had planned was supposed to be a thrilling adventure—a fun
          camping trip with my closest friends. We eagerly anticipated nights
          filled with laughter and camaraderie around the flickering warmth of a
          campfire. However, the reality that awaited me was a chilling
          departure from our expectations. Nicko, Lino, Linus, and I set out on
          an excursion that would forever alter the course of our lives.
        </p>
        <p>
          We meticulously packed for the journey, ensuring we had everything we
          needed to navigate the rugged terrain and unpredictable weather.
          Radios crackling with the promise of shared adventures, a camera to
          capture the moments, provisions to sustain us for a week, standard
          fall clothing to ward off the chill, folding chairs for our campsite
          discussions, knives for practicality, and a shotgun for safety—a
          well-prepared group of friends ready to embrace the wilderness.
        </p>
        <p>
          Our destination was Walla Walla, Washington, a gateway to the majestic
          Blue Mountains. We envisioned days spent exploring the vast
          landscapes, hiking through the undulating terrain, and forging
          unforgettable memories against the backdrop of the Pacific Northwest's
          breathtaking beauty. Our ambitious plans included venturing into parts
          of Oregon, adding an extra layer of excitement to our already buzzing
          anticipation.
        </p>
        <p>
          The day of departure arrived, and we gathered at the airport in the
          early hours, the excitement palpable in the air. The dim glow of the
          pre-dawn sky mirrored the hushed enthusiasm of our small group. The
          hum of the airport gradually came to life as we exchanged spirited
          greetings and finalized our last-minute preparations.
        </p>
        <p>
          As the plane soared towards Walla Walla, optimism and friendship
          buoyed our spirits. Little did we know that this journey, which began
          with laughter and shared dreams, would soon descend into a nightmarish
          odyssey that would test the limits of our endurance and the strength
          of our bonds.
        </p>
        <p>
          The initial days of our camping trip unfolded as planned, with
          laughter echoing through the valleys and the glow of the campfire
          casting dancing shadows on our faces. We hiked through the picturesque
          landscapes, marveling at the rugged beauty of the Blue Mountains and
          relishing the freedom of the great outdoors.
        </p>
        <p>
          However, as the week wore on, an unsettling undercurrent began to
          permeate our once joyous escapade. Strange sounds echoed through the
          dense woods at night, and an eerie tension settled over our campsite.
          Unease crept into our conversations, and the shadows cast by the
          campfire seemed to dance with unseen fears.
        </p>
        <p>
          It was on the sixth night that the tranquility of our campsite was
          shattered. A bone-chilling howl echoed through the forest, freezing us
          in our tracks. The once-familiar woods now felt like an alien
          landscape, cloaked in darkness and uncertainty. We clutched our
          shotguns, scanning the shadows for any sign of the source of our
          dread.
        </p>
        <p>
          As the night wore on, our fear escalated. Unseen eyes seemed to watch
          us from the inky blackness, and an oppressive silence descended like a
          suffocating shroud. The radio crackled with static, intermittent and
          haunting. Our once carefree discussions turned into hushed whispers,
          as if speaking too loudly would awaken something malevolent in the
          night.
        </p>
        <p>
          The next morning, we awoke to find one of our tents shredded, as if a
          beast had torn through it in a fit of primal rage. Panic set in as we
          realized that the delicate fabric separating us from the unknown had
          been effortlessly torn apart. The camera, our once-reliable chronicler
          of joyous moments, now served as a silent witness to the unspoken
          horrors that unfolded in the heart of the wilderness.
        </p>
        <p>
          The camaraderie that had bound us together began to fray as paranoia
          took root. Suspicion hung in the air like a thick fog, each rustle of
          leaves and snap of a twig sending shivers down our spines. The
          shotgun, once a symbol of security, now felt inadequate against the
          intangible threat that lurked in the shadows.
        </p>
        <p>
          Our hikes became tense and cautious, every step echoing with the
          weight of unspoken fears. The Blue Mountains, once a playground of
          natural wonders, now seemed to harbor ancient secrets that refused to
          be revealed. Whispers of folklore danced through our minds—tales of
          skinwalkers, shape-shifting entities that roamed the wilderness,
          leaving dread in their wake.
        </p>
        <p>
          As the days passed, our once-unbreakable bond strained under the
          weight of the unknown. Nicko, Lino, and Linus, once my confidants in
          the face of adversity, now regarded each rustle in the underbrush with
          suspicion. The shared laughter that once echoed through the woods was
          replaced by a heavy silence, broken only by the distant howls that
          seemed to mock our vulnerability.
        </p>
        <p>
          On the penultimate night, our reality took a nightmarish turn. The
          shadows that clung to the edges of our campsite seemed to materialize
          into grotesque forms. Unearthly whispers taunted us, each syllable a
          malevolent promise of the horrors that awaited in the inky darkness.
        </p>
        <p>
          The breaking point came when Linus, in a fit of terror, bolted into
          the woods, his frantic screams fading into the distance. The remaining
          trio, gripped by a paralyzing fear, huddled together, the glow of the
          dying campfire offering little solace against the encroaching abyss.
        </p>
        <p>
          As dawn painted the horizon with hues of pink and gold, the
          once-united quartet had become a shattered remnant of its former self.
          Nicko, Lino, and I, haunted by the unspoken terrors that had befallen
          our friend, stared into the abyss of the forest, our eyes reflecting
          the shared trauma that had fractured our once-unbreakable friendship.
        </p>
        <p>
          The return journey to Walla Walla, Washington, was a solemn pilgrimage
          through the remnants of our shattered dreams. The laughter that had
          once echoed through the valleys was replaced by a mournful silence,
          and the Blue Mountains, once a symbol of majestic beauty, now loomed
          over us like silent sentinels, bearing witness to the inexplicable
          horror that had unfolded in their midst.
        </p>
        <p>
          In the airport, as we parted ways, the weight of the unspoken horror
          lingered in the air. Nicko and Lino, like silent ghosts, disappeared
          into the crowd, leaving me alone to confront the hollow emptiness that
          had replaced the joy of our once-promising camping trip.
        </p>
        <p>
          The events that transpired in the Blue Mountains remain etched in my
          memory like a nightmare that refuses to fade with waking. The
          photographs from our ill-fated journey, once cherished mementos of
          friendship, now serve as a chilling reminder of the unknown horrors
          that lurk in the heart of nature, waiting to claim those who dare to
          venture too far into the wilderness, where the ancient spirits of the
          land take on a terrifying form.
        </p>
      </main>

      <Footer />
    </div>
  );
}
