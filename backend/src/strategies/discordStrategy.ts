import { Strategy as DiscordStrategy } from "passport-discord";
import passport from "passport";
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "../config";
import { pool } from "../database/connection";

const scopes = ["identify", "email"];

passport.serializeUser((user, done) => {
  return done(null, user);
});

passport.deserializeUser((user: any, done) => {
  return done(null, user);
});

passport.use(
  new DiscordStrategy(
    {
      clientID: DISCORD_CLIENT_ID,
      clientSecret: DISCORD_CLIENT_SECRET,
      callbackURL: "/auth/discord/callback",
      scope: scopes,
    },
    async (accessToken, refreshToken, profile, cb: any) => {
      try {
        const providerId = profile.id;
        const provider = profile.provider;
        const username = profile.username;
        const email = profile.email;

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
