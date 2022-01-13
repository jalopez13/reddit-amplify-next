import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container flex items-center justify-center h-screen mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Reddit Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-4xl">Welcome to Reddit Clone!</h1>
      </main>
    </div>
  );
};

export default Home;
