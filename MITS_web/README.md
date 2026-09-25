# Experiment 1 - Responsive Multi-Section College Website

## Run

### Quick Start (Root Directory)
1. In the root directory (`MITS_web`):
   ```bash
   npm install
   npm run dev
   ```
   This will start both the Express backend server (port 5000) and the Vite frontend client (port 5173) concurrently.

### Alternative (Separate Terminals)
1. In one terminal:
   ```bash
   cd server
   npm install
   npm run dev
   ```
2. In another terminal:
   ```bash
   cd client
   npm install
   npm run dev
   ```
3. Open the Vite URL (`http://localhost:5173`) shown in the terminal.

The Express API works without MongoDB by using sample notices. If a MongoDB connection is configured,
the API will read/write notices from MongoDB.

MongoDB is optional for the demo:
- Copy server/.env.example to server/.env
- Set MONGODB_URI if MongoDB is available.
