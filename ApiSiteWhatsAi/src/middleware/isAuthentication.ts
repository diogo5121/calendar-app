import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_ACCESS_TOKEN || ''
const secretRefreshKey = process.env.SECRET_ACCESS_REFRESH_TOKEN || ''

export const isAuthentication = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(403).json({ message: "Authorization header is missing" });
    return;
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = verify(token, secretKey) as { userId: string }; // Adjust the type according to your token payload
    console.log(decoded);

    // Add uuid to req object
    req.body.uuid = decoded.userId;
    next();
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
    return;
  }
};

export default isAuthentication;
