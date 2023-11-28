import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useResponsive from "../Hooks/responsive";

export default function Cookie() {
  const isMobile = useResponsive();
  return (
    <div className="home-page">
      <Navbar />
      <div className="terms-page" style={{ paddingBottom: 100 }}>
        <img
          data-main-image=""
          style={{
            objectFit: "contain",
            objectPosition: "center center",
            opacity: 1,
          }}
          sizes="(min-width: 1280px) 1280px, 100vw"
          decoding="async"
          loading="lazy"
          alt="A stylised, brightly coloured silhouette cutout collage with hints of people, floating in negative space."
          src="https://linktr.ee/_gatsby/image/7a52a25b068e0eb6bbefe085edbc4c6a/098a53fdb6081b452444da0bc4b6ae40/image-3.avif?eu=050ed3f8f2b45a2aed48f1574d4d604f63510deb15fbfd78b999b4d287fa5ad55428d222e85e77e965c5a8b22a6322c8310d165473b9ba4c5b0244826cf44cb06b53770fdfb95463f4e6d80ebd84172de0bbcfd3610d3e97ba2b1a1ac13078e787373b00d959ce4ae8c09d43299d0d43a4f7b9ea8871b34aedce545e1647ef923022bd617db5a5fca37438cb4d0fc13f8388a4d56b777e62278bce9bcbbeacf6a4cbf812b52fb0&a=w%3D2560%26h%3D1357%26fm%3Davif%26q%3D75&cd=a1f37f869e10a4cac566227b93cead8e"
        />

        <h1 className="cFMxiM" style={{ textAlign: "center", marginTop: 30 }}>
          Cookie Notice
        </h1>

        <div className="styles__Box-sc-c44u6a-0 hvsrUt box styles__InnerContainer-sc-qp97t5-1 chvWrr">
          <div
            itemprop="text"
            font-family="1"
            className="styles__StyledDiv-sc-jb2at6-0 itijnk"
            style={isMobile ? { width: "90vw", overflowX: "hidden" } : {}}
          >
            <p>
              <strong>Last updated: Monday December 20, 2021</strong>
            </p>
            <p>
              This Cookie Notice explains how CelebriLinks Pty Ltd and its group
              companies (“CelebriLinks”, “we”, “us” and “ours”) use cookies and
              similar tracking technologies, including SDKs (together,
              “cookies”) on or through our website at https://linktr.ee/
              (“Platform”), or when you visit a CelebriLinks member’s profile
              (“User Profile”). It explains what these technologies are and why
              we use them, as well as your rights to control our use of them.
            </p>
            <p>&nbsp;</p>
            <h3>What are cookies?</h3>
            <p>
              Cookies are small data files that are placed on your computer or
              mobile device. Website owners can use cookies for a variety of
              reasons that can include enabling the website to work (or work
              more efficiently), providing personalised content and advertising,
              and creating analytics. Cookies set by the website owner (in this
              case, CelebriLinks) are called “first party cookies”. Only
              CelebriLinks can access the first party cookies it sets.
            </p>
            <p>
              Cookies set by parties other than CelebriLinks are called “third
              party cookies”. Third party cookies enable third party features or
              functionality (e.g. like advertising, interactive content and
              social sharing) to be provided on or through the website. The
              parties that set these third party cookies on websites can
              recognise your device both when it visits the website in question
              and also when it visits other websites that have partnered with
              them.
            </p>
            <p>&nbsp;</p>
            <h3>Why do we use cookies?</h3>
            <p>
              We use first party and third party cookies for several reasons.
              Some cookies are required for technical reasons that are strictly
              necessary to provide CelebriLinks services, and we refer to these
              as “essential” cookies. Other cookies also enable us to carry out
              analytics, to personalise and enhance your experience and/or to
              show you more relevant content and advertising.
            </p>
            <p>
              In addition to the cookies used by CelebriLinks for these
              CelebriLinks purposes, CelebriLinks Users can adjust their
              settings to set first and third party cookies on their
              CelebriLinks User Profile for their own independent purposes of a
              similar nature.
            </p>
            <p>
              The specific types of first and third party cookies that we serve
              through our Platform, and the purposes they perform are described
              in our cookie consent tool, which you can access with your cookie
              preferences. This tool also describes the third party cookies that
              CelebriLinks members may decide to use on their User Profile and
              the purposes that they perform.
            </p>
            <p>&nbsp;</p>
            <h3>What about other tracking technologies, like web beacons?</h3>
            <p>
              Cookies are not the only way to recognise or track visitors to a
              website. We may use other, similar technologies from time to time,
              like web beacons (sometimes called “tracking pixels” or “clear
              gifs”) on our website. These are tiny graphics files that contain
              a unique identifier that enable us to recognise when someone has
              visited our Platform or opened an e-mail that we have sent them.
              This allows us, for example, to monitor the traffic patterns of
              users from one page within our Platform to another, to deliver or
              communicate with cookies, to understand whether you have come to
              our Platform from an online advertisement displayed on a
              third-party website, to improve site performance, and to measure
              the success of e-mail marketing campaigns. In many instances,
              these technologies are reliant on cookies to function properly,
              and so declining cookies will often impair their functioning.
            </p>
            <p>&nbsp;</p>
            <h3>How can you control cookies?</h3>
            <p>
              In some countries (including where EU or UK law applies), you have
              the right to decide whether to accept or reject cookies. In any
              event you can exercise your cookie preferences through our cookie
              consent tool, which you can access by clicking Cookie Preferences.
              You can separately control whether to accept or reject cookies set
              by CelebriLinks Users on their User Profiles.
            </p>
            <p>
              In relation to websites, you can also set or amend your web
              browser controls to accept or refuse cookies.
            </p>
            <p>
              If you choose to reject cookies, you may still use our website or
              app though your access to some functionality and areas may be
              restricted.
            </p>
            <p>&nbsp;</p>
            <h3>How often will we update this Cookie Notice?</h3>
            <p>
              We may update this Cookie Notice from time to time in order to
              reflect, for example, changes to the cookies we use or for other
              operational, legal or regulatory reasons. Please therefore
              re-visit this Cookie Notice regularly to stay informed about our
              use of cookies and related technologies.
            </p>
            <p>
              The date at the top of this Cookie Notice indicates when it was
              last updated.
            </p>
            <p>&nbsp;</p>
            <h3>Where can you get further information?</h3>
            <p>
              If you have any questions about our use of cookies or other
              technologies, please email us at{" "}
              <a href="mailto:support@linktr.ee">support@linktr.ee</a>.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
