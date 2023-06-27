import Head from 'next/head';
import TopHeader from '../components/Header';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stay.y</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopHeader />
    </div>
  )
}
