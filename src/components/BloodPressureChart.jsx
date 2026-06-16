import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

function BloodPressureChart({ history }) {
  const labels = history.map(
    item => `${item.month} ${item.year}`
  );

  const systolic = history.map(
    item => item.blood_pressure.systolic.value
  );

  const diastolic = history.map(
    item => item.blood_pressure.diastolic.value
  );

  const data = {
    labels,

    datasets: [
      {
        label: "Systolic",
        data: systolic,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        tension: 0.4
      },
      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "#8B7BEF",
        backgroundColor: "#8B7BEF",
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: "300px" }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default BloodPressureChart;