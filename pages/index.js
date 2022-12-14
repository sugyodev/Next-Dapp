import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import bg from '../public/background.jpg'

export default function Home() {
  return (
    <div style={{ backgroundImage: `url(${bg.src})` }} class="h-[1080px] bg-cover" >
      <Head>
        <title>League of legends Let battle commence…</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="md:left-[131px] left-[30px] mr-2 top-[297px] absolute">
        <Image src="/board.png" width="693px" height="194px" />
      </div>
      <div className="md:left-[169px] left-[40px] mr-2 top-[559px] absolute cursor-pointer hover:opacity-80">
        <Image src="/details_btn.png" width="298px" height="29px" />
      </div>
      <div className="absolute top-[641px] md:left-[169px] mr-2 left-[40px] cursor-pointer hover:opacity-80">
        <Image src="/all_games_btn.png" width="385px" height="61px" />
      </div>
      <div className='top-[918px] left-[1440px] absolute'>
        <Image src="/text.png" width="369px" height="25px" />
      </div>
      <div className='md:left-[77%] top-[987px] left-[200px] absolute'>
        <button className='bg-black p-6 pb-5 bg-black rounded-[40px] hover:opacity-80'>
          <Image src="/left.png" width="28px" height="28px" />
        </button>
      </div>
      <div className='md:left-[84%] top-[987px] left-[350px] absolute'>
        <button className='bg-black p-6 pb-5 bg-black rounded-[40px] hover:opacity-80'>
          <Image src="/right.png" width="28px" height="28px" />
        </button>
      </div>
    </div>
  )
}
