import { Strategy as GithubStrategy } from "passport-github2";
import passport from "passport";
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "../config";
import { pool } from "../database/connection";

const scopes = ["profile", "user:email"];

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
      scope: scopes,
    },
    async (accessToken: any, refreshToken: any, profile: any, cb: any) => {
      try {
        const providerId = profile.id;
        const username = profile.username;
        const email = profile.emails[0].value;
        const provider = profile.provider;

        const results = await pool.query(
          "SELECT * FROM users WHERE email = $1",
          [email]
        );

        if (results.rowCount === 0) {
          await pool.query(
            "INSERT INTO users (providerId, provider, username, email) VALUES ($1, $2, $3, $4)",
            [providerId, provider, username, email]
          );
        }

        cb(null, profile);
      } catch (error) {
        console.error(error);
        return cb(error, null);
      }
    }
  )
);
