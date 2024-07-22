import React from "react";
import useResponsive from "../Hooks/responsive";
import PricingCard from "./Common/PricingCard";
import { useNavigate } from "react-router-dom";

const Pricings = () => {
  const [selection, setSelection] = React.useState(1);
  const isMobile = useResponsive()  
    const navigate = useNavigate();



  const handleNormal = () => {
    navigate('/signup', { replace: true });
  }

 
  return (
    <div className="pricing1">
      <div className="pricing-bar">
        <h1 className="pick-plan-heading">Pick the {isMobile && <br/>} perfect plan</h1>
        <div className="pricing-switch">
          <div className="pricing-switch-wrap">
            {/* <p className="pricing-switch-txt">Save with annual plans</p> */}
            {/* <div className="pricing-switch-options">
              <div
                onClick={() => setSelection(1)}
                className={
                  selection === 1
                    ? "pricing-option-slct"
                    : "pricing-option-unslct"
                }
              >
                Monthly
              </div>
              <div
                onClick={() => setSelection(2)}
                className={
                  selection === 2
                    ? "pricing-option-slct"
                    : "pricing-option-unslct"
                }
              >
                Annually
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="pricing-cards p-10s">
      <div
          onClick={(e) => {
            handleNormal("free");
          }}
        >
          <PricingCard
            tag={"3 Month Free Trail"}
            price={0}
            btnText={"Join as Free"}
            html={`
        <ul>  
        <li>User can add up to 5 buttons</li>
        <li>User can change button colors</li>
        <li>User can't select themes</li>
        <li>User can't add icon with button</li>
        <li>User can't make button featured</li>
        </ul>
        `}
          />
        </div>
        <div
          onClick={(e) => {
            handleNormal("user");
          }}
        >
          <PricingCard
            tag={"Celebri User"}
            price={1.99}
            btnText={"Join as User"}
            html={`
        <ul>
        <li>User can add up to 5 buttons</li>
        <li>User can change button colors</li>
        <li>User can't select themes</li>
        <li>User can't add icon with button</li>
        <li>User can't make button featured</li>
        </ul>
        `}
          />
        </div>
        <div onClick={(e) => handleNormal("vip")}>
          <PricingCard
            tag={"Celebri VIP"}
            price={9.99}
            btnText={"Join as VIP"}
            html={`
        <ul>
       <li>User can add up to 50 buttons</li>
       <li>User can change button colors</li>
       <li>User can select themes</li>
       <li>User can add icon with button</li>
       <li>User can make button featured</li>\
       </ul>
        `}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricings;
