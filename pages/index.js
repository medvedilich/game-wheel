import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header id="data" title="йоу" />
        <a href="phone.html">текст ссылки</a>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    

      <Footer />
    </div>
    <script>
    let text = document.GetElementById("data");
      while(true){
      text.innerText = event.accelerationIncludingGravity.x;
    }
    </script>
  )
}
