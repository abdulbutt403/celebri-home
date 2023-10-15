import React from "react";
import useResponsive from "../Hooks/responsive";
import PricingCard from "./Common/PricingCard";

const Pricings = () => {
  const [selection, setSelection] = React.useState(1);
  const isMobile = useResponsive()
  return (
    <div className="pricing1">
      <div className="pricing-bar">
        <h1 className="pick-plan-heading">Pick the {isMobile && <br/>} perfect plan</h1>
        <div className="pricing-switch">
          <div className="pricing-switch-wrap">
            <p className="pricing-switch-txt">Save with annual plans</p>
            <div className="pricing-switch-options">
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
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-cards">
        <PricingCard tag={'Free'} price={0} btnText={'Join for free'}/>
        <PricingCard tag={'Starter'} price={5} btnText={'Get Starter'}/>
        <PricingCard tag={'Pro'} price={9} btnText={'Try Pro for free'} extraTag={'Free for 7 days'} badge={'Free trail'}/>
        <PricingCard tag={'Premium'} price={24} btnText={'Get Premium'}/>
      </div>
    </div>
  );
};

export default Pricings;
