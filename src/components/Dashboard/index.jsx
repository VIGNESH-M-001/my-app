import "./index.css";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Overview from "../Overview";
import Summary from "../Summary";
import Referral from "../Referral";
import ReferralTable from "../ReferralTable";
import Footer from "../Footer";

import Header from "../Header";

const Dashboard = () => {
  const [dashboardData, setdashboardData] = useState(null);
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }

  useEffect(() => {
    const getReferralDetails = async () => {
      const url =
        "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/referrals";
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      };
      const response = await fetch(url, options);
      const data = await response.json();
      setdashboardData(data.data);
    };
    getReferralDetails();
  }, []);
  return (
    <div>
      <Header />
      <div className="dashboard-container">
        <h1>Referral Dashboard</h1>
        <p>Track your referrals, earnings, and partner activity in one place</p>
        {dashboardData === null ? (
          <div className="loading">
            <p>Loading....</p>
          </div>
        ) : (
          <div>
            <div
              className="overview-container"
              role="region"
              aria-label="Overview metrics"
            >
              <h1>Overview</h1>
              <ul>
                {dashboardData.metrics.map((eachmetrics) => (
                  <Overview metrics={eachmetrics} key={eachmetrics.id} />
                ))}
              </ul>
            </div>
            <div className="summary-container" aria-label="Service summary">
              <h1>Service Summary</h1>
              <Summary summaryDetails={dashboardData.serviceSummary} />
            </div>
            <div className="referral-container" aria-label="Share referral">
              <h1>Refer friends and earn more</h1>
              <Referral referralDetails={dashboardData.referral} />
            </div>

            <div className="referralTable-container">
              <div className="table-container">
                <ReferralTable tableDetails={dashboardData.referrals} />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
