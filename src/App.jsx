import { useEffect, useState } from "react";
import { getPatients } from "./services/api";

import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";

import "./styles/app.css";
import BloodPressureChart from "./components/BloodPressureChart";
import DiagnosisCards from "./components/DiagnosisCards";
function App() {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const patients = await getPatients();

      const jessica = patients.find(
        (patient) => patient.name === "Jessica Taylor"
      );

      setPatient(jessica);
    }

    fetchData();
  }, []);

  if (!patient) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="dashboard">

      <Sidebar />

      <div className="main-content">
        <div className="card">

  <h2 style={{ marginBottom: "20px" }}>
    Diagnosis History
  </h2>
<BloodPressureChart
 history={patient.diagnosis_history.slice(0,6)}
/>

<DiagnosisCards
 latest={patient.diagnosis_history[0]}
/>

</div>

        <div className="card">

  <h2 style={{ marginBottom: "20px" }}>
    Diagnostic List
  </h2>

  <table
    style={{
      width: "100%",
      borderCollapse: "collapse"
    }}
  >
    <thead>
      <tr>
        <th align="left">Problem</th>
        <th align="left">Description</th>
        <th align="left">Status</th>
      </tr>
    </thead>

    <tbody>

      {patient.diagnostic_list.map(
        (item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td>{item.status}</td>
          </tr>
        )
      )}

    </tbody>
  </table>

</div>
      </div>

      <div className="right-panel">
        <ProfileCard patient={patient} />

     <div className="card">
  <h2>Lab Results</h2>

  {patient.lab_results.map((item, index) => (
    <div
      key={index}
      style={{
        padding: "12px 0",
        borderBottom: "1px solid #eee"
      }}
    >
      {item}
    </div>
  ))}
</div>
      </div>

    </div>
  );
}

export default App;

