# Stock Trading Platform

A full-stack stock trading dashboard inspired by Zerodha's Kite platform. Built with the MERN stack, it includes a landing page, an interactive trading dashboard, and a REST API backend connected to MongoDB.

## Features

- 📊 Real-time watchlist with stock prices and percentage change
- 💼 Holdings and Positions tracking with profit/loss visualization
- 📈 Interactive doughnut and bar charts using Chart.js
- 🛒 Buy/Sell order placement window
- 🔍 Stock search functionality
- 📱 Fully responsive dashboard UI
- 🌐 Landing page with pricing, product info, and signup flow

## Tech Stack

**Frontend & Dashboard:** React.js, React Router, Material UI (MUI), Chart.js, Axios  
**Backend:** Node.js, Express.js, CORS, Body-parser, Dotenv  
**Database:** MongoDB with Mongoose ODM

## Project Structure

stock-trading-platform/
├── backend/ # Express REST API + MongoDB models & schemas
│ ├── model/
│ ├── Schemas/
│ └── index.js
├── frontend/ # Landing page (React)
│ └── src/
│ └── landing_page/
└── dashboard/ # Trading dashboard (React)
└── src/
└── Components/


## API Endpoints

| Method | Endpoint         | Description                  |
|--------|-----------------|-------------------------------|
| GET    | `/allHoldings`   | Fetch all holdings            |
| GET    | `/allPositions`  | Fetch all positions           |
| POST   | `/newOrder`      | Place a new buy/sell order    |

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB Atlas account (or local MongoDB)

### Installation

1. Clone the repository

git clone https://github.com/VidushiSharma24/stock-trading-platform.git
cd stock-trading-platform


2. Install dependencies in each folder

cd backend && npm install
cd ../frontend && npm install
cd ../dashboard && npm install


3. Set up environment variables in `backend/.env`

PORT=3002
MONGO_URL=your_mongodb_connection_string


4. Run each part in a separate terminal
Terminal 1 - Backend

cd backend
npm start

Terminal 2 - Frontend

cd frontend
npm start

Terminal 3 - Dashboard

cd dashboard
npm start


5. Open the app
   - Frontend: `http://localhost:3000`
   - Dashboard: `http://localhost:3001`
   - Backend API: `http://localhost:3002`

## Live Demo

🔗 Coming soon!

## Screenshots

*Add screenshots here once deployed*

## Future Improvements

- User authentication (JWT/Passport)
- Real-time stock price updates via WebSockets
- Order history and transaction logs
- Dark mode support

## Author

**Vidushi Sharma**  
[GitHub](https://github.com/VidushiSharma24) | [LinkedIn](https://www.linkedin.com/in/vidushi-sharma0204/)

## Acknowledgements

UI/UX inspired by [Zerodha's Kite](https://kite.zerodha.com) trading platform.
