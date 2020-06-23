import Head from "next/head";

import Card from "../components/card";

import "../styles/styles.scss";

const mockData = [
  {
    artist: "Dua Lipa",
    song: "Cool",
    genre: "Pop",
    albumArt: "/assets/images/dualipa.jpg",
  },
  {
    artist: "Dua Lipa",
    song: "Cool",
    genre: "Pop",
    albumArt: "/assets/images/dualipa.jpg",
  },
  {
    artist: "Dua Lipa",
    song: "Cool",
    genre: "Pop",
    albumArt: "/assets/images/dualipa.jpg",
  },
  {
    artist: "Dua Lipa",
    song: "Cool",
    genre: "Pop",
    albumArt: "/assets/images/dualipa.jpg",
  },
  {
    artist: "Dua Lipa",
    song: "Cool",
    genre: "Pop",
    albumArt: "/assets/images/dualipa.jpg",
  },
]

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
        <section className="cards">
        {mockData.map((music,i) =>{
          return(
            <Card  
            artist="Dua Lipa"
            song="Cool"
            genre="Pop"
            albumArt="/assets/images/dualipa.jpg">
            </Card>
          )
        })}
        </section>
      </main>
    </div>
  );
}
