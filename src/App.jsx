import { useEffect, useState } from "react";
import { fetchFuelData } from "./services/api";
import Filters from "./Component/Filters";
import FuelChart from "./Component/FuelChart";
import { prepareChartData } from "./utils/formatData";


function App() {
  const [rawData, setRawData] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    fuel: "",
    year: ""
  });

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchFuelData().then(data => {
  
      setRawData(data);
    });
  }, []);


const cities = [
  ...new Set(rawData.map(d => d["Metro Cities"]).filter(Boolean))
];

const fuels = [
  ...new Set(rawData.map(d => d["Products "]).filter(Boolean))
];

const years = [
  ...new Set(
    rawData.map(d => d.Year?.slice(-4)).filter(Boolean)
  )
];

  useEffect(() => {
    if (filters.city && filters.fuel && filters.year) {
      const result = prepareChartData(
        rawData,
        filters.city,
        filters.fuel,
        filters.year
      );
      setChartData(result);
    }
  }, [filters, rawData]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Fuel Price Dashboard</h2>

      <Filters
        cities={cities}
        fuels={fuels}
        years={years}
        filters={filters}
        setFilters={setFilters}
      />

      {chartData.length > 0 && <FuelChart data={chartData} />}
    </div>
  );
}

export default App;