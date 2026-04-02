import Papa from "papaparse";

export const fetchFuelData = async () => {
  return new Promise((resolve) => {
    Papa.parse("data/fuel.csv", {
      download: true,
      header: true,
      complete: (result) => {
        resolve(result.data);
      },
    });
  });
};