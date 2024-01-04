import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p style={{ textAlign: 'center' }}>
        <a href="https://nic0.win">Home</a><br />
        Contact:&nbsp;<a href="mailto:contact@nic0.win">contact@nic0.win</a>
      </p>
    </footer>
  );
}
