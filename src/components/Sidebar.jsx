function Sidebar({ patients }) {
  return (
    <div className="sidebar">

      <h2>Patients</h2>

      <div className="patients-list">

        {patients.map((patient) => (

          <div
            key={patient.name}
            className={
              patient.name === "Jessica Taylor"
                ? "patient-item active"
                : "patient-item"
            }
          >

            <img
              src={patient.profile_picture}
              alt={patient.name}
            />

            <div>
              <h4>{patient.name}</h4>

              <p>
                {patient.gender}, {patient.age}
              </p>
            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Sidebar;