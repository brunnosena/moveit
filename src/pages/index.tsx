import Head from 'next/head'

import CompletedChallenges from "../components/CompletedChallenges";
import ExpirenceBar from "../components/ExpirenceBar";
import ChallengeBox from '../components/ChallengeBox'
import Countdown from "../components/Countdown";
import Profile from "../components/Profile";
import CountdownProvider from '../contexts/CountdownContext'


import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExpirenceBar />

      <CountdownProvider>
      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
            <ChallengeBox />
          </div>
      </section>
      </CountdownProvider>
    </div>
  )
}
