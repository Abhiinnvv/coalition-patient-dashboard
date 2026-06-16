function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>Tech.Care</h2>
      </div>

      <nav>
        <span>Overview</span>
        <span className="active-nav">Patients</span>
        <span>Schedule</span>
        <span>Message</span>
        <span>Transactions</span>
      </nav>

      <div className="doctor">
        Dr. Jose Simmons
      </div>
    </header>
  );
}

export default Header;