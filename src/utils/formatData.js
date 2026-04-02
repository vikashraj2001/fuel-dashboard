
const getMonthShort = (monthStr) => {
  if (!monthStr) return "";

  const map = {
    January: "Jan",
    February: "Feb",
    March: "Mar",
    April: "Apr",
    May: "May",
    June: "Jun",
    July: "Jul",
    August: "Aug",
    September: "Sep",
    October: "Oct",
    November: "Nov",
    December: "Dec"
  };

  const fullMonth = monthStr.split(",")[0].trim();
  return map[fullMonth];
};


export const prepareChartData = (data, city, fuel, year) => {
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  return months.map(month => {
    const filtered = data.filter(d => {
      const itemYear = d.Year?.slice(-4);
      const itemMonth = getMonthShort(d.Month);

      return (
        d["Metro Cities"]?.trim() === city &&
        d["Products "]?.trim() === fuel &&
        itemYear === year &&
        itemMonth === month
      );
    });

    if (!filtered.length) return 0;

    const prices = filtered.map(d =>
      Number(
        d["Retail Selling Price (Rsp) Of Petrol And Diesel (UOM:INR/L(IndianRupeesperLitre)), Scaling Factor:1"]
      ) || 0
    );

    return (
      prices.reduce((a, b) => a + b, 0) / prices.length
    );
  });
};