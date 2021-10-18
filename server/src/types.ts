import { Request, Response } from "express";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { Stream } from "stream";

export type MyContext = {
  req: Request & {
    session: Session &
      Partial<SessionData> & { userId?: string; orgId?: string };
  };
  res: Response;
  redis: Redis;
};

export interface Upload {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => Stream;
}
