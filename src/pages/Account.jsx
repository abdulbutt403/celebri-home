import React, { useState } from "react";
import AdminHeader from "../components/Admin/Header";
import useResponsive from "../Hooks/responsive";
import {
  DollarIcon,
  LockedIcon,
  MailingIcon,
  PlusIcon,
  SocialIcons,
  SubscribeIcon,
  SupportBanner,
  TryFreeIcon,
} from "../svgs";

export default function Account() {
 
  return (
    <div className="admin-panel">
      <AdminHeader />
      <main>
        <div
          style={{
            display: "flex",
            minHeight: "100vh",
            paddingTop: 10,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              paddingTop: 70,
            }}
          >
            <div style={{ display: "flex" }}>
              <Feed />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const Feed = () => {

  return (
    <div className="profile-feed">
      <h2>My account</h2>

      <br />

      <a style={{ marginLeft: -10 }} tabIndex="0" className="setting-link">
        <span>My Information</span>
      </a>

      <Information />
      <div class="submit2">
        <input
          class="button purple large"
          data-user-edit-submit=""
          type="button"
          value="Save details"
        />
      </div>

      <br />

      <a style={{ marginLeft: -10 }} tabIndex="0" className="setting-link">
        <span>Security Sections</span>
      </a>

      <Security />

      <br />

      <a style={{ marginLeft: -10 }} tabIndex="0" className="setting-link">
        <span>Current Account</span>
      </a>

      <TreeComponent />

      <br />


      <a style={{ marginLeft: -10 }} tabIndex="0" className="setting-link">
        <span>Account Actions</span>
      </a>

      <Actions />
      <br/>

      <a style={{ marginLeft: -10 }} tabIndex="0" className="setting-link">
        <span>Danger Zone</span>
      </a>

      <Deletion />

      <br />
    </div>
  );
};

const Information = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="sc-eGCarw zAeKe" style={{ padding: 20 }}>
      <div class="billing-name">
        <label class="active-input" for="name">
          <input
            type="text"
            class="fields"
            placeholder="John Doe"
            data-name=""
          />

          <span className="active-span">Name</span>
        </label>
        <div data-active-input-error="" data-name-errors=""></div>
      </div>
      <br />
      <div class="billing-name">
        <label class="active-input" for="name">
          <input
            type="email"
            class="fields"
            placeholder="John@Doe.com"
            data-name=""
          />

          <span className="active-span">Email</span>
        </label>
        <div data-active-input-error="" data-name-errors=""></div>
      </div>
    </div>
  );
};
const Security = () => {

  const isMobile = useResponsive();
  const [active, setActive] = useState(false);
  return (
    <div className="sc-eGCarw zAeKe" style={{ maxHeight: isMobile? 110: 90 }}>
      <span class="sc-GTWni gyOhIp">Multi-factor authentication</span>
      <p
        className="text-concrete text-md mt-2"
        style={{ transform: "translateY(-8px)" }}
      >
        Multi-factor authentication adds a layer of security on your account
      </p>
      <label
        onClick={() => setActive((x) => !x)}
        className={`sc-jQbIHB cQriIP ${
          active ? "checked" : ""
        } sc-fvhGYg kHEClt`}
        style={{ transform: `translateY(${isMobile ? `-78px` : `-55px`})` }}
      >
        <input type="checkbox" className="sc-jUEnpm cCSKON" />
      </label>
    </div>
  );
};

const TreeComponent = () => {

  const isMobile = useResponsive();

  return (
    <div className="tree active primary sc-eGCarw zAeKe" data-tree="64078753">
      <div style={{ display: "flex" , flexDirection : isMobile ? 'column': 'row' }}>
        <div className="tree__sidebar">
          <span className="img-circle">
            <div
              id="Account--InitialsAvatar"
              data-page-title=""
              data-username="hafiz402"
              data-theme-key="custom"
            >
              <div className="sc-bdfBwQ sc-dQppl dRQKnM jBEgpy">
                <span
                  font-family="Inter"
                  font-weight="600"
                  font-size="18px"
                  className="sc-bqyKva bpcatB"
                >
                  H
                </span>
              </div>
            </div>
          </span>
        </div>
        <div>
          <div className="tree__section tree__section--header">
            <div className="username">
              <span className="name">@hafiz402</span>
            </div>
          </div>
          <div className="tree__section tree__section--plan">
            <h5>Plan</h5>
            <div className="name">Free</div>
          </div>
          <div className="tree__section tree__section--admins">
            <h5>
              Admins{" "}
              <a
                className="info"
                href="https://linktr.ee/help/linktree-ff524ba1864c/en/"
                target="_blank"
              >
                ?
              </a>
            </h5>
            <ul data-user-list="">
              <li className="user" data-user="69935441">
                <span className="username">@hafiz402</span>
                <span className="tag">ME</span>
                <span className="tag">OWNER</span>
              </li>
              <li>
                Upgrade this account to CelebriLinks PRO to give other users access
                to manage it
              </li>
            </ul>
          </div>
          <div className="tree__section tree__section--footer" style={{overflow: 'scroll', justifyContent: 'center'}}>
           
            <a
              className="button outline"
              href="https://linktr.ee/admin/switch/hafiz402/links"
            >
              Links
            </a>
            <a
              className="button outline"
              href="https://linktr.ee/admin/switch/hafiz402/appearance"
            >
              Appearance
            </a>
            <a
              className="button outline"
              href="https://linktr.ee/admin/switch/hafiz402/settings"
            >
              Settings
            </a>
            <a className="button purple account-upgrade-btn">Upgrade</a>
          
          </div>
        </div>
      </div>
    </div>
  );
};

const Deletion = () => {
  const isMobile = useResponsive();
  return (
    <div className="sc-eGCarw zAeKe" style={{ maxHeight: isMobile? 110:  90 }}>
      <button
        style={{
          position: "relative",
          transition: "duration-75 ease-out",
          width: "100%",
          height: "2.5rem", // You can adjust the height as needed
          padding: "0.875rem 1.375rem", // Adjust padding as needed
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: "0.5rem", // Adjust borderRadius as needed
          outline: "none",
          border: "none",
          width: '150px',
          background: "darkred", // Primary background color
          color: "white",
        }}
        className="focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased bg-danger hover:bg-danger active:bg-danger rounded-[8px] md:w-[143px] hover:bg-primary-alt active:bg-primary-alt"
        type="button"
      >
        <span className="flex items-center justify-center">
          <span className="block font-semibold text-md">Delete Account</span>
        </span>
      </button>
    </div>
  );
};




const Actions = () => {
  const isMobile = useResponsive();
    return (
      <div className="sc-eGCarw zAeKe"  style={{ maxHeight: isMobile? 110:  90 }}>
        <div className="tree__section tree__section--footer" style={{justifyContent: 'flex-start'}}>
            <a
              className="button outline"
              href="https://linktr.ee/admin/switch/hafiz402/settings"
            >
              Change Password
            </a>
            <a className="button purple account-upgrade-btn">Reset Password</a>
          </div>
      </div>
    );
  };
  