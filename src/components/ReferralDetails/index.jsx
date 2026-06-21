import "./index.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../Header";
import Cookies from "js-cookie";

const ReferralDetails = () => {
  const location = useLocation();
  const referralData = location.state;

  return (
    <div>
      <Header />
      <div className="details-page">
        <Link to="/" className="back-link">
          ← Back to dashboard
        </Link>
        {referralData === null ? (
          <p>Loading....</p>
        ) : (
          <>
            <h1 className="page-title">Referral Details</h1>

            <p className="page-description">
              Full information for this referral partner.
            </p>

            <div className="details-card">
              <div className="card-header">
                <h2>{referralData.name}</h2>

                <span className="service-badge">
                  {referralData.serviceName}
                </span>
              </div>

              <hr />

              <div className="detail-row">
                <span>REFERRAL ID</span>
                <p>{referralData.id}</p>
              </div>

              <div className="detail-row">
                <span>NAME</span>
                <p>{referralData.name}</p>
              </div>

              <div className="detail-row">
                <span>SERVICE NAME</span>
                <p>{referralData.serviceName}</p>
              </div>

              <div className="detail-row">
                <span>DATE</span>
                <p>{referralData.date}</p>
              </div>

              <div className="detail-row">
                <span>PROFIT</span>
                <p>${referralData.profit.toLocaleString()}</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ReferralDetails;
