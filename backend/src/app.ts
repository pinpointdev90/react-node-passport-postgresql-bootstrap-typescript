import express from "express";
import morgan from "morgan";
import cors from "cors";
import passport from "passport";
import cookieSession from "cookie-session";
import { FRONTEND_DOMAIN, PORT, SECRET_KEY } from "./config";
import * as routes from "./routes/index.routes";

// Strategies
import "./strategies/discordStrategy";
import "./strategies/githubStrategy";
import "./strategies/googleStrategy";

const app = express();

app.set("port", PORT);
app.get("env") === "production" && app.set("trust proxy", 1);

app.use(morgan("dev"));
app.use(
  cors({
    credentials: true,
    origin: FRONTEND_DOMAIN,
  })
);
app.use(express.json());
app.use(
  cookieSession({
    name: "session",
    secret: SECRET_KEY,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    secure: app.get("env") === "production" ? true : false,
    httpOnly: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", routes.authRoutes);

export default app;
