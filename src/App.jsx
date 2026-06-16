import { useEffect, useState } from "react";
import { getPatients } from "./services/api";

import Sidebar from "./components/Sidebar";
import ProfileCard from "./components/ProfileCard";
import BloodPressureChart from "./components/BloodPressureChart";
import DiagnosisCards from "./components/DiagnosisCards";
import Header from "./components/Header";

import "./styles/app.css";

function App() {
  const [patient, setPatient] = useState(null);
const [patients, setPatients] = useState([]);

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

  useEffect(() => {
  async function fetchData() {
  try {

    // Check cache first
    const cachedData = localStorage.getItem("patients");

    if (cachedData) {
      const data = JSON.parse(cachedData);

      setPatients(data);

      const jessica = data.find(
        (p) => p.name === "Jessica Taylor"
      );

      setPatient(jessica);

      return;
    }

    // Fetch from API if not cached
    const data = await getPatients();

    // Save to cache
    localStorage.setItem(
      "patients",
      JSON.stringify(data)
    );

    setPatients(data);

    const jessica = data.find(
      (p) => p.name === "Jessica Taylor"
    );

    setPatient(jessica);

  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
}

  fetchData();
}, []);

  if (loading) {
  return (
    <div style={{ padding: "40px" }}>
      <h2>Loading Dashboard...</h2>
    </div>
  );
}

if (error) {
  return <h2>{error}</h2>;
}

if (!patient) {
  return <h2>Patient not found</h2>;
}

  return (
    <>
      <Header />

      <div className="dashboard">
        <Sidebar patients={patients} />

        <div className="main-content">
          <div className="card">
            <h2 style={{ marginBottom: "20px" }}>
              Diagnosis History
            </h2>

            <BloodPressureChart
              history={patient.diagnosis_history.slice(0, 6)}
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
                borderCollapse: "collapse",
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
                {patient.diagnostic_list.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
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
                  borderBottom: "1px solid #eee",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;