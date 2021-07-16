import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../apollo-client";

import Card from "../components/card";
import { signIn, signOut, useSession } from "next-auth/client";

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
];

// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//       query MyPlaylists {
//       playlist @rest(type: "Playlists", path: "me/playlists") {
//         name
//     }
//   }`,
//   });

//   return {
//     props: {
//       countries: data,
//     },
//  };
// }

export default function Home() {
  const [session, loading] = useSession();

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
        {!session && (
          <>
            Not signed in <br />
            <button onClick={signIn}>Sign In</button>
          </>
        )}
        {session && (
          <>
            <section className="cards">
              {mockData.map((music, i) => {
                return (
                  <Card
                    artist={music.artist}
                    song={music.song}
                    genre={music.genre}
                    albumArt={music.albumArt}
                  ></Card>
                );
              })}
            </section>
          </>
        )}
      </main>
    </div>
  );
}
