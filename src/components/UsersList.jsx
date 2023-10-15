import React from "react";
import PricingCard from "./Common/PricingCard";
import UserCard from "./Common/UserCard";

const UsersList = () => {
  return (
    <div className="users1">
      <h1 className="user-heading">
        <span>
          A CelebriLinks Template to Find <br /> Every brand and creator
        </span>
      </h1>
      <p className="user-text">
        Different Link Apps, integrations and visual styles can help you create
        a CelebriLinks that looks and feels like you and your <br />
        brand. Explore our library of custom templates to grow and connect with
        your audience even more easily!
      </p>

      <div className="search-engine" style={{ width: '93.2%', marginTop: '5rem', paddingBottom: '10em', display: 'flex'}}>
        <div className="filter">
          <div class="filter-hd">
            <h3>Categories</h3>
          </div>
          <div class="filter-links">
            <div class="filter-btns">Filter by Men</div>
            <div class="filter-btns">Filter by Women</div>
            <div class="filter-btns">Filter by CelebriVIPs</div>
          </div>
        </div>
        <div className="results">
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
