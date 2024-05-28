import app from './app';
import dotenv from 'dotenv';
import { syncDB } from './database/syncDB';

import cors from 'cors';
dotenv.config();

const PORT = process.env.API_PORT || 5050;

async function startApp() {
    try {
      await syncDB(); 
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    } catch (error) {
      console.error('Error starting the app:', error);
    }
  }
  
  startApp();