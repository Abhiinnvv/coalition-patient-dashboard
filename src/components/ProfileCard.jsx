function ProfileCard({ patient }) {
  return (
    <div className="card">

      <img
        src={patient.profile_picture}
        alt={patient.name}
        style={{
          width: "150px",
          borderRadius: "50%",
          display: "block",
          margin: "0 auto"
        }}
      />

      <h2
        style={{
          textAlign: "center",
          marginTop: "20px"
        }}
      >
        {patient.name}
      </h2>

      <div style={{ marginTop: "20px" }}>
        <p><strong>DOB:</strong> {patient.date_of_birth}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Phone:</strong> {patient.phone_number}</p>
        <p><strong>Emergency:</strong> {patient.emergency_contact}</p>
        <p><strong>Insurance:</strong> {patient.insurance_type}</p>
      </div>

    </div>
  );
}

export default ProfileCard;