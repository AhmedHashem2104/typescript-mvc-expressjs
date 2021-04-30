// src/middleware/not-found.middleware.ts

import { Request, Response, NextFunction } from "express";

export const notFoundHandler = (
  request: Request,
  response: Response,
  next: NextFunction
) => {

  const message = {
    message : "Envalid URL"}
    ;

  response.status(404).send(message);
};