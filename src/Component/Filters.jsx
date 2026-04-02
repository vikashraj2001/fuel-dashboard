const Filters = ({ cities, fuels, years, filters, setFilters }) => {
  const handleChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <select
        value={filters.city}
        onChange={e => handleChange("city", e.target.value)}
      >
        <option value="">City</option>
        {cities.map(c => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        value={filters.fuel}
        onChange={e => handleChange("fuel", e.target.value)}
      >
        <option value="">Fuel</option>
        {fuels.map(f => (
          <option key={f}>{f}</option>
        ))}
      </select>

      <select
        value={filters.year}
        onChange={e => handleChange("year", e.target.value)}
      >
        <option value="">Year</option>
        {years.map(y => (
          <option key={y}>{y}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;