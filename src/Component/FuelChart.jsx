import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const FuelChart = ({ data }) => {
  const ref = useRef();

  useEffect(() => {
    if (!data.length) return;

    const chart = echarts.init(ref.current);

    chart.setOption({
      tooltip: {},
      xAxis: {
        type: "category",
        data: [
          "Jan","Feb","Mar","Apr","May","Jun",
          "Jul","Aug","Sep","Oct","Nov","Dec"
        ]
      },
      yAxis: { type: "value" },
      series: [
        {
          type: "bar",
          data: data
        }
      ]
    });

    return () => chart.dispose();
  }, [data]);

  return <div ref={ref} style={{ height: "400px" }} />;
};

export default FuelChart;