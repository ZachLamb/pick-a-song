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
    song: "Physical",
    genre: "Pop",
    albumArt: "/assets/images/dualipa.jpg",
  },
  {
    artist: "Dua Lipa",
    song: "Break My Heart",
    genre: "Pop",
    albumArt: "/assets/images/dualipa.jpg",
  },
  {
    artist: "Dua Lipa",
    song: "Levitating",
    genre: "Pop",
    albumArt: "/assets/images/dualipa.jpg",
  },
  {
    artist: "Dua Lipa",
    song: "Don't Start Now",
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
          const zIndex = (i+1)*100;
          return(
            <Card  
            artist={music.artist}
            song={music.song}
            genre={music.genre}
            albumArt="/assets/images/dualipa.jpg"
            key={i}
            priority={zIndex}>
            </Card>
          )
        })}
        </section>
      </main>
    </div>
  );
}
