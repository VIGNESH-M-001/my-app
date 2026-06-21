import "./index.css";

const Summary = (props) => {
  const { summaryDetails } = props;
  const { service, activeReferrals, totalRefEarnings, yourReferrals } =
    summaryDetails;
  return (
    <div className="summary-subContainer">
      <div className="summary-card">
        <p>SERVICE</p>
        <p className="summary-servicedata">{service}</p>
      </div>
      <div className="summary-card">
        <p>YOUR REFERRALS</p>
        <p className="summary-data">{yourReferrals}</p>
      </div>
      <div className="summary-card">
        <p>ACTIVE REFERRAL</p>
        <p className="summary-data">{activeReferrals}</p>
      </div>
      <div className="summary-card">
        <p>TOTAL REFERRAL</p>
        <p className="summary-data">{totalRefEarnings}</p>
      </div>
    </div>
  );
};

export default Summary;
