import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReferralTable = (props) => {
  const { tableDetails } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setsearchInput] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const navigate = useNavigate();

  const itemsPerPage = 10;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentReferrals = tableDetails.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(tableDetails.length / itemsPerPage);

  const filteredTableData = currentReferrals.filter(
    (each) =>
      each.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      each.serviceName.toLowerCase().includes(searchInput.toLowerCase()),
  );

  return (
    <div>
      <h1>All Referral</h1>
      <div className="table-top-section">
        <div>
          <label>Search</label>
          <input
            type="search"
            placeholder="Name or Service"
            value={searchInput}
            onChange={(e) => {
              setsearchInput(e.target.value);
            }}
          />
        </div>
        <div>
          <p>sort by date </p>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="desc">Newest First </option>
            <option value="asc">Oldest first </option>
          </select>
        </div>
      </div>
      <table className="referrals-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Service</th>
            <th>Dat</th>
            <th>Profit</th>
          </tr>
        </thead>

        <tbody>
          {filteredTableData.map((eachReferral) => (
            <tr
              key={eachReferral.id}
              onClick={() =>
                navigate(`/referral/${eachReferral.id}`, {
                  state: eachReferral,
                })
              }
            >
              <td>{eachReferral.name}</td>
              <td>{eachReferral.serviceName}</td>
              <td>{eachReferral.date.replaceAll("-", "/")}</td>
              <td className="profit-color">${eachReferral.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-container">
        <p className="entries-count">
          showing {firstIndex} - {lastIndex} of {tableDetails.length} entries
        </p>

        <div className="pagination">
          <button
            className="page-btn"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={
                currentPage === index + 1 ? "page-btn active" : "page-btn"
              }
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            className="page-btn"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralTable;
