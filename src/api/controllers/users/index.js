// Package
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { Router } from "express";

// Settings
import config from "../../../config";

export const passwordHash = value => {
  return crypto
    .createHash(config.hash)
    .update(config.salt + value)
    .digest("hex");
};

export const createtokenLogin = value => {
  return jwt.sign(value, config.jwt.apiKey, {
    expiresIn: config.jwt.expire
  });
};

export const verifyToken = req => {
  const token = req.headers["access-token"];
  let result = {
    status: false,
    mensaje: "Token no proveída."
  };
  if (token) {
     jwt.verify(token, config.jwt.apiKey, (err, decoded) => {
      if (err) {
        result = { status: false, mensaje: "Token inválida" };
      } else {
        result = { status: true, result: decoded };
      }
    });
  }
  return result
};
