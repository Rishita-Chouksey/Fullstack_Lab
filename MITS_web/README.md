# Experiment 1 - Responsive Multi-Section College Website

## Run
1. Open this folder in VS Code.
2. In one terminal:
   cd server
   npm install
   npm run dev
3. In another terminal:
   cd client
   npm install
   npm run dev
4. Open the Vite URL shown in the terminal.

The Express API works without MongoDB by using sample notices. If a MongoDB connection is configured,
the API will read/write notices from MongoDB.

MongoDB is optional for the demo:
- Copy server/.env.example to server/.env
- Set MONGODB_URI if MongoDB is available.
