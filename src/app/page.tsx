import '@/styles/globals.scss';
import styles from '@/styles/pages/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1
        style={{
          fontWeight: 500,
          fontSize: '2em',
        }}
      >
        Hello World!
      </h1>
    </div>
  );
}
