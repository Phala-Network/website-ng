import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home(props) {
  console.log('props', props)

  return (
    <div className={styles.container}>
      <Head>
        <title>Phala Network</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>Phala Network</main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export const getServerSideProps = ({ locale, locales }) => {
  return {
    props: {
      locale,
      locales,
    },
  }
}
