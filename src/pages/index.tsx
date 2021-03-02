import Head from "next/head";
import { GetServerSideProps } from "next";

import ChallengesProvider, { ChallengesProviderProps } from "../contexts/ChallengesContext";
import CompletedChallenges from "../components/CompletedChallenges";
import ExpirenceBar from "../components/ExpirenceBar";
import ChallengeBox from "../components/ChallengeBox";
import Countdown from "../components/Countdown";
import Profile from "../components/Profile";
import CountdownProvider from "../contexts/CountdownContext";

import styles from "../styles/pages/Home.module.css";

type HomeProps = Omit<ChallengesProviderProps, "children">;

export default function Home({ user }: HomeProps) {
  return (
    <ChallengesProvider user={user}>
      <div className={styles.homeContainer}>
        <Head>
          <title>Início | Move.it</title>
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
    </ChallengesProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      user: {
        level: Number(level),
        currentExperience: Number(currentExperience),
        challengesCompleted: Number(challengesCompleted),
      },
    },
  };
};
