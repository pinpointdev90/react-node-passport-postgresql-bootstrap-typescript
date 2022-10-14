import { Request, Response } from "express";
import passport from "passport";
import { FRONTEND_DOMAIN } from "../config";

export const loginDiscord = passport.authenticate("discord");
export const discordCallback = passport.authenticate("discord", {
  failureRedirect: `${FRONTEND_DOMAIN}/`,
  successRedirect: `${FRONTEND_DOMAIN}/`,
});

export const loginGithub = passport.authenticate("github");
export const githubCallback = passport.authenticate("github", {
  failureRedirect: `${FRONTEND_DOMAIN}/`,
  successRedirect: `${FRONTEND_DOMAIN}/`,
});

export const loginGoogle = passport.authenticate("google");
export const googleCallback = passport.authenticate("google", {
  failureRedirect: `${FRONTEND_DOMAIN}/`,
  successRedirect: `${FRONTEND_DOMAIN}/`,
});

export const getUser = (req: Request, res: Response) => {
  if (req.user) {
    return res.status(200).json({
      user: req.user,
    });
  } else {
    return res.status(404).json({
      message: "User not found",
    });
  }
};

export const logout = (req: Request, res: Response) => {
  if (req.user) {
    req.logout((err) => {
      if (err) res.redirect(`${FRONTEND_DOMAIN}/`);
    });
    res.redirect(`${FRONTEND_DOMAIN}/`);
  }
};
