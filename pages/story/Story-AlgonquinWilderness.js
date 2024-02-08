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
        <title>Algonquin Wilderness</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Header title="A Night in the Algonquin Wilderness" />
        <p style={{ textAlign: 'center' }}>
          By: Dylan Oalmann
        </p>
        <p className="description">
          The chill wind cut through the dense forest, and the moon cast an eerie glow upon the towering pines. Four friends, Ross, Rusty, Pip, and I, embarked on a camping trip deep into the heart of the Algonquin wilderness. Excitement buzzed in the air as we set up our campsite, oblivious to the ancient secrets that the forest held.
        </p>
        <p>As night fell, we gathered around a crackling fire, the warmth offering a false sense of security. Tales of local legends echoed in our conversation, and the name "Wendigo" lingered like a ghost in the shadows. Unbeknownst to us, our laughter attracted the attention of something far more malevolent than we could fathom. </p>
        <p>
          A distant howl pierced the silence, halting our banter mid-sentence. We exchanged uneasy glances, dismissing it as a trick of the wind. The woods seemed to close in around us, and the flickering fire provided little solace against the encroaching darkness.
        </p>
        <p>
        As the night wore on, an inexplicable sense of dread settled over the campsite. Shadows danced eerily between the trees, and the wind whispered with an unsettling cadence. Rusty, always the skeptic, laughed nervously, attempting to break the tension that clung to us like a suffocating fog.

        </p>
        <p>
        In the early hours, as the embers of our dying fire painted a dim tableau, a haunting figure emerged from the treeline. The creature's eyes glowed like burning embers, and its skeletal frame cast a ghastly silhouette against the moonlit backdrop. Panic seized us as we realized that the Wendigo, a mythical beast hungry for human flesh, had found us.

        </p>
        <p>
        Without uttering a word, the creature circled our camp, its unnaturally elongated limbs moving with an otherworldly grace. The air turned frigid, and our breaths materialized in front of us as we huddled together, paralyzed by terror.

        </p>
        <p>
        A guttural growl echoed through the night, and the Wendigo's eyes fixated on Pip. It lunged forward with inhuman speed, its claws slashing the air. We screamed, a chorus of fear that reverberated through the silent woods. In an instant, Pip was gone, swallowed by the darkness, leaving only the echoes of his desperate cries.

        </p>
        <p>
        The creature retreated into the shadows, and we were left with the horrifying realization that the Wendigo was no mere legend. Ross, Rusty, and I huddled together, our minds grappling with the nightmare unfolding around us. The once-inviting woods now seemed like a labyrinth of terror, concealing a malevolent force that hungered for our flesh.

        </p>
        <p>
        The fire dwindled to mere embers, casting long, distorted shadows on the trees. Ross, eyes wide with fear, whispered that we needed to find a way out. But the forest seemed to conspire against us, the path constantly shifting, mocking our feeble attempts to escape.

        </p>
        <p>
        As we stumbled through the underbrush, the Wendigo's haunting cries echoed in the distance. It was relentless, a spectral force hunting us through the night. Rusty, his breath hitched in terror, muttered about the Wendigo's curse, a malevolent spirit that twisted and deformed those who fell victim to its hunger.

        </p>
        <p>
        Exhausted and desperate, we stumbled upon a dilapidated cabin, a relic from a time long past. The air inside hung heavy with the scent of decay, and ancient symbols etched into the walls hinted at a futile attempt to ward off malevolent forces. We barricaded ourselves inside, the creaking floorboards betraying our every movement.

        </p>
        <p>
        Hours passed like an eternity, the sound of the Wendigo's footsteps circling the cabin like a predatory dance. Rusty, haunted by the legends he had dismissed earlier, muttered about the Wendigo's insatiable hunger, its unrelenting pursuit of those who dared to trespass into its domain.

        </p>
        <p>
        Dawn finally broke, casting a feeble light upon the dilapidated cabin. The creature's haunting cries faded, and we cautiously stepped outside, the forest now eerily silent. The Wendigo, for the moment, had retreated into the shadows.

        </p>
        <p>
        Haunted by the horrors of that night, Ross, Rusty, and I stumbled out of the Algonquin wilderness, our minds forever scarred by the spectral presence that lurked in the ancient woods. The Wendigo, a creature of nightmares, had claimed one of our own, leaving us to grapple with the chilling reality that some legends are far more than mere tales told around a campfire—they are warnings, whispered by the wind, of the ancient, insatiable evils that lurk in the heart of the wilderness.

        </p>
      </main>

       <Footer />
    </div>
  )
}
