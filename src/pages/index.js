import Content from '@/components/content';
import Head from 'next/head';
import Layout from 'src/Layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stay.y</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
          <Content />
        </Layout>
      </main>
    </div>
  )
}
