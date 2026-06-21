import "./index.css";

const Overview = (props) => {
  const { metrics } = props;
  const { label, value, kind } = metrics;
  return (
    <li className="metrics-list">
      <h1>{value}</h1>
      <p>{label}</p>
    </li>
  );
};

export default Overview;
