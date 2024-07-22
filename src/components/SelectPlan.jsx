import React from "react";
import PricingCard from "./Common/PricingCard";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { baseUrl } from "../constants";
import { useNavigate } from "react-router-dom";

const SelectPlan = ({ setPlan, setStep, UserDetails }) => {
  const navigate = useNavigate();

  const handleVipSelection = (type) => {
    window.open('https://buy.stripe.com/test_eVa8wKc4Y1s90zCdQU', '_self');
  };
  const handleNormal = () => {
    window.open('https://buy.stripe.com/test_14kaES7OIgn396828d', '_self');
  }

  const handleFreeSelection = (type) => { 
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(localStorage.getItem("user_Setting"))

    fetch(`https://celebri-backend.onrender.com/users/free-trial?userId=${user._id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
     
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message === 'Free trial status updated successfully') {
            navigate('/admin/links', { replace: true });
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
<div class="grid grid-cols-1 pricing-cards sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
          onClick={(e) => {
            handleFreeSelection("free");
          }}
        >
          <PricingCard
            tag={"Free Trail"}
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
