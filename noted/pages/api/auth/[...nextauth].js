import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  providers: [
    Providers.Spotify({
      clientId: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      debug: true
    }),
  ],
  callbacks: { 
    async jwt(token, _, account) {
      if (account) {
        token.id = account.id
        token.accessToken = account.accessToken
      }
       return token
    },
    async session(session, user) {
      session.user = user
      return session
    }
  },
};

export default (req, res) => NextAuth(req, res, options);