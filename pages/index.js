import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Map from '../components/Map'


export default function Home() {
  return (
    <>
      <Head>
        <title>Expo Line Map</title>
        <meta name="description" content="Expo Line Map" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=fira+sans"></link>
      </Head>

      <main className={styles.main}>

        <header className={styles.layoutheader}>

          <img src='transitstationlogo.jpeg' />

          <h1>Expo Line Transportation Map</h1>
          <h2>
            Waterfront Station (Downtown Vancouver) to King George Station (Surrey)
            Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)</h2>
        </header>

        <Map />

        <footer className={styles.layoutfooter}>
          <img src='Translink_logo-512040365.png' width={180} height={88} />
        </footer>
      </main>
    </>


  )
}
