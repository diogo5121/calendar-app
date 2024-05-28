import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { Response } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const secretKey = process.env.SECRET_ACCESS_TOKEN || ''

export default async function loginWithEmailService(email: string, password: string) {
    try {
        const authFire = await signInWithEmailAndPassword(auth, email, password);
        const accessToken = jwt.sign({ userId: authFire.user.uid }, secretKey, { expiresIn: '7d' });
        return {
            success: true,
            token: accessToken,
        };
    } catch (err) {
        return {
            success: false,
            message: 'Invalid credentials'
        };
    }

}