import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "../config";
import { pool } from "../database/connection";

const scopes = ["profile", "email"];

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user: any, done) => {
  done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      scope: scopes,
    },
    async (accessToken, refreshToken, profile, cb: any) => {
      try {
        const providerId = profile.id;
        const provider = profile.provider;
        const username = profile.displayName;
        const email = profile.emails && profile.emails[0].value;

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
