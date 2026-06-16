function DiagnosisCards({ latest }) {
  return (
    <div className="vitals-grid">

      <div className="vital-card respiratory">
        <h4>Respiratory Rate</h4>

        <h2>
          {latest.respiratory_rate.value} bpm
        </h2>

        <p>
          {latest.respiratory_rate.levels}
        </p>
      </div>

      <div className="vital-card temperature">
        <h4>Temperature</h4>

        <h2>
          {latest.temperature.value}°F
        </h2>

        <p>
          {latest.temperature.levels}
        </p>
      </div>

      <div className="vital-card heart">
        <h4>Heart Rate</h4>

        <h2>
          {latest.heart_rate.value} bpm
        </h2>

        <p>
          {latest.heart_rate.levels}
        </p>
      </div>

    </div>
  );
}

export default DiagnosisCards;