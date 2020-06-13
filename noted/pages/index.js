import Head from "next/head";


import Card from "../components/card";

import "../styles/styles.scss";

export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>noted</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <h1 className="title">Note'd</h1>
      </nav>
      <main>
        <Card></Card>
      </main>
    </div>
  );
}
