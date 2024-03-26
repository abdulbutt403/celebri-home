import React from "react";
import PricingCard from "./Common/PricingCard";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { baseUrl } from "../constants";

const SelectPlan = ({ setPlan, setStep, UserDetails }) => {
  const handleVipSelection = (type) => {
    fetch(`http://localhost:9000/users/createCheckoutSession`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        id: UserDetails._id,
        userName: UserDetails.userName,
        userType: type,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.success === true) {
          window.location.href = res.url;
        }
      })
      .catch(() => {});
  };
  // const handleVipSelection = async (type) => {
  //  const response = axios
  //     .post(`${baseUrl}/users/createCheckoutSession` , {
  //       headers: {
  //         "content-type": "application/json",
  //         accept: "application/json",

  //     },
  //       body:JSON.stringify({
  //         "id": UserDetails._id ,
  //         "userName": UserDetails.userName,
  //         "userType": type
  //       })
  //     })

  //     console.log(response)

  //   // setStep();
  // };
  return (
    <div className="pricing1">
      <div className="pricing-cards two">
        <div
          onClick={(e) => {
            handleVipSelection("user");
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
        <div onClick={(e) => handleVipSelection("vip")}>
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
