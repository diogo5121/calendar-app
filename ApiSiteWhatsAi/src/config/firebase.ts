import { getAuth } from '@firebase/auth';
import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.FIRE_APIKEY || ''
const authDomain = process.env.FIRE_AUTHDOMAIN || ''
const projectId = process.env.FIRE_PROJECTID || ''
const storageBucket = process.env.FIRE_STORAGEBUCKET || ''
const messagingSenderId = process.env.FIRE_MESSAGINGSENDERID || ''
const appId = process.env.FIRE_APPID || ''
const measurementId = process.env.FIRE_MEASUREMENTID || ''

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  };

const appfirebase = initializeApp(firebaseConfig);
export const auth = getAuth(appfirebase);