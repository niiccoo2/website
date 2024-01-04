import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p style={{ textAlign: 'center' }}>
        <a href="https://nic0.win">Home</a><br />
        Contact:&nbsp;<a href="mailto:contact@nic0.win">contact@nic0.win</a>.<br></br><br></br>
        Made with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">next.js</a>.
      </p>
    </footer>
  );
}
