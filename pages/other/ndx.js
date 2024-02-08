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
        <title>NDX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={styles.main}>
        <Header title="NDX" />
        <p className="description">
          <a href="https://nic0.win">Back</a><br></br>
          
          <br></br>Github: <a href="https://github.com/niiccoo2/NDX/" target="_blank" rel="noopener noreferrer">github.com/niiccoo2/NDX</a><br></br>
          
          <br></br>This is a simple tool with a softwere menu and basic softwere.<br></br>

          <br></br>The tools are: Help, Text Editor, Calculator, Random Number Game, Rock Paper Scissors, Tic Tac Toe, Word Guess, Magic 8 Ball, ChatGPT, Reaction Tester, Density Calc, Snake, Gambling, Pig Latin Translator, Sign Out, Mad-Libs<br></br>

          <br></br>Text Editor: Once started type file name to create or edit or 'l' to list files and 'q' to quit. Once in a file you can read the contents. Press '1' to edit or '2' to save and quit.<br></br>

          <br></br>Calculator: Once started type in your first number. Then type the fist letter of the operation you want to do! (A for +, S for -, M for *, D for ÷, E for exponent, F for factorial, MAN for manual Not done! OR q to Quit). Then enter the second number! (This does not do anything for F or MAN). Then your answer will be printed (For E or MAN this will be printed after you type E or MAN). Then the program restarts! <br></br>

          <br></br>Number Guessing Game: Just guess the number and it will tell you if you are higher or lower. Guess the number to quit.<br></br>

          <br></br>Rock Paper Scissors: Type "Rock", "Paper", or "Scissors". Thats it...<br></br>

          <br></br>Tic Tac Toe: Press the number on your key board for where you want to go and play Tic Tac Toe. This is not done and may change!<br></br>

          <br></br>Word Guess: Try to guess that word in our ever growing list of words!!! Easy is less than 100 words and Hard is more than 800!!! if you don't know the word press "w" and then "y" to see the word! No Hints :)<br></br>

          <br></br>Magic 8 Ball: Ask it a yes or no question and it will give you an answer!<br></br>

          <br></br>ChatGPT: Enter the password (We may change it so if you think you shoud know it ask Nico) then use ChatGPT! Press q to quit at any prompt. If people are spaming things for no reason to waste my $$$ you will be asked to stop using NDX.<br></br>

          <br></br>Reaction Tester: Start the program then wait until it tells you to type a letter to number once you type said letter or number you will be given a time.<br></br>

          <br></br>Density Calc: Enter the mass and Volume and the density will be calculated!<br></br>

          <br></br>Snake: Not Done Use Up, Down, Left, and Right to control the green square. Eat the red square. There is no tail or way to die yet.<br></br>

          <br></br>Gambling: Not Done I did not do this, I do not know if it works.<br></br>

          <br></br>Pig Latin Translator: Translate single words into pig latin!<br></br>

          <br></br>Sign Out: This is a sign out form.<br></br>

          <br></br>Mad-Libs: It is just Mad-Libs.<br></br>

          <br></br>All short .py files will be put into part1.py all new short files (Less than 100 lines).<br></br>
          <br />
        </p>
        
      </main>

       <Footer />
    </div>
  )
}
