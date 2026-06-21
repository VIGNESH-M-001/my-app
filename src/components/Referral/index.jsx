import "./index.css";

const Referral = (props) => {
  const { referralDetails } = props;
  const { link, code } = referralDetails;

  return (
    <div className="referral-subcontainer">
      <div>
        <p>YOUR REFERRAL LINK</p>
        <div className="referral-input">
          <input type="text" placeholder={link} readOnly />
          <button type="button">Copy</button>
        </div>
      </div>

      <div>
        <p>YOUR REFERRAL CODE</p>
        <div className="referral-input">
          <input type="text" placeholder={code} readOnly />
          <button>Copy</button>
        </div>
      </div>
    </div>
  );
};

export default Referral;
