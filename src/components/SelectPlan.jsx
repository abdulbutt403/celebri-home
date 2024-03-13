import React from "react";
import PricingCard from "./Common/PricingCard";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { baseUrl } from "../constants";

const SelectPlan = ({ setPlan, setStep }) => {
  const handleVipSelection = async () => {
    setPlan("vip");
    const stripe = await loadStripe("pk_test_51OooRcHLdlz3XbBpAQqsj9X48pkUwWDLp1eJEmrtCs9M3sUd8KClluGwF1UVcka2GTxEuPq6y7mDyH9KZ6rm6x4S00Hz7rb4BA");

   const response = axios
      .post(`${baseUrl}/users/create-payment`, {} , {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
 
      console.log(response)

    setStep(4);
  };
  return (
    <div className="pricing1">
      <div className="pricing-cards two">
        <div
          onClick={() => {
            setPlan("user");
            setStep(4);
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
        <div onClick={handleVipSelection}>
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

export default SelectPlan;
