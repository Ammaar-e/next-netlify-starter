import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon1.ico" />
      </Head>

      <main>
        <Header title="Welcome to my website!" />
        <p className="description">
          My name is Ammaar and I am <code>13Y, Male, Canadian, I Love IT and Homelabs</code>
        </p>
        <p>
          + I love the cloud, Ketchup Chips and Fries!
        </p>
      </main>

      <Footer />
    </div>
  )
}
