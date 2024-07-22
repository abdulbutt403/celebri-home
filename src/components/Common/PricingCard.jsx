import React from "react";

export default function PricingCard({ tag, price, btnText, extraTag, badge, html }) {
  const btnStyle = badge
    ? {
        background: "rgb(255, 108, 2)",
        color: "#000",
        border: "1px solid rgb(255, 108, 2)",
      }
    : {};

  return (
    <div className="pricing-card-wrap">
      <div className="pricing-card-header">
        {badge && (
          <div className="tag-wrapper">
            <p className="EMjWk">{badge}</p>
          </div>
        )}
        <div className="pricing-tag-wrap">
          <h3 className="pick-plan-heading">{tag}</h3>
        </div>

        {extraTag && <h3 className="pick-plan-heading">{extraTag}</h3>}
        <div className="pricing-tag-value">
          {!badge && price != 0  && <h3 className="pick-plan-heading">${price}</h3>}
          {!badge && price == 0  && <h3 className="pick-plan-heading">{'  '} <br/></h3>}
          {!badge && price != 0 && <p className="pricing-tag-currency"> USD/monthly</p>}
          {badge && (
            <p className="pricing-tag-currency">
              ${price} USD per month after, billed monthly
            </p>
          )}
        </div>
      </div>
      <div className="pricing-card-footer">
        <div className="styles__Box-sc-c44u6a-0 pricing-card-text ">
          {html ? <div className="pricing-text-top" style={{textAlign: 'left'}} dangerouslySetInnerHTML={{__html : html}}></div> :<p className="pricing-text-top">
            Unlimited links and a <br /> customizable CelebriLinks to connect your
            community to everything you are.
          </p>}
          <div className="pricing-btn-wrap">
            <a className="pricing-btn-inner" style={btnStyle}>
              {btnText}
            </a>
          </div>
          {badge && <ProLine/>}
        </div>
      </div>
    </div>
  );
}

const ProLine = () => {
  return (
    <div className="jscLyN">
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 0L10 1V3H6L5 4V6H1L0 7V13L1 14H5L5.5 13.5L6 14H10L10.5 13.5L11 14H15L16 13V1L15 0H11ZM11 13H12H14H15V12V2V1H14H12H11V2V4V12V13ZM10 4H9H7H6V5V7V12V13H7H9H10V12V5V4ZM4 7H5V8V12V13H4H2H1V12V8V7H2H4Z"
          fill="#70764D"
        ></path>
      </svg>
      <p className="isHaNx">
        Pro users get more visitors
      </p>
    </div>
  );
};
