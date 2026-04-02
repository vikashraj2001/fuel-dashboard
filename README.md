Fuel Price Dashboard 

This project is a frontend data visualization dashboard built as part of the SDE (Frontend) assignment.
It visualizes the Retail Selling Price (RSP) of Petrol and Diesel across metro cities using interactive charts.

Features
Select Metro City, Fuel Type, and Year
View monthly average fuel prices in a bar chart
Built using Apache ECharts (without React wrapper)
Handles real dataset with inconsistent formats
Clean and modular code structure

Tech Stack
React (JavaScript)
Vite
Apache ECharts
PapaParse (for CSV parsing)

Project Structure
src/
  components/
    Filters.jsx
    FuelChart.jsx
  services/
    api.js
  utils/
    formatData.js
  App.jsx
  main.jsx

public/
  data/fuel.csv

Setup Instructions
1. Clone the repository
git clone <your-repo-link>
cd fuel-dashboard
2. Install dependencies
npm install
3. Run the project
npm run dev

The app will run on:
http://localhost:5173

Live Demo vercel
https://fuel-dashboard-ruddy.vercel.app/
