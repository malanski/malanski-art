import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import styles from '../styles/Home.module.scss'
import ArtStore from './art-store'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout >
        <Head>
          <title>Malanski Art</title>
        </Head>

        <ArtStore />


      </Layout>
    </div>
  )
}
