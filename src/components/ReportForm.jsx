import React from "react";
import Field from "./Common/Field";

export default function ReportForm() {
  return (
    <div className="users1">
      <h1 className="user-heading">
        <span>Report a Violation</span>
      </h1>
      <p className="contact-text" style={{textAlign: 'center', maxWidth: '90vw'}}>
      We take account violations very seriously, review all requests and take action if required. Use the form below to report a violation or an account you think we should <br/> review. You can view our Terms of Service <a style={{textDecoration: 'underline', color: 'blue'}}>here</a>.<br/><br/>

 

(Please note: This form isn’t for general support requests. If you need help with your own Linktree account, contact support on <a style={{textDecoration: 'underline', color: 'blue'}}>support@celibrilinks.com</a> or visit our Help Centre. If you have a copyright or trademark complaint to submit, visit our <a style={{textDecoration: 'underline', color: 'blue'}}>Contact Form</a>.)
      </p>

      <div>
        <div className="contact-form-wrapper d-flex justify-content-center">
          <form action="#" className="contact-form">

           
            <Field type="text" placeholder="Username" stickyLabel />
            <br/>
            <Field type="email" placeholder="Email" />
            <br/>
            <Field type="text" placeholder="URL of problem you are reporting (optional)" />
            <br/>
            <Field type="text" placeholder="Report Type" />
            <br/>
            <div>
              <textarea
                id="message"
                className="form-control rounded border-white mb-3 form-text-area"
                rows="5"
                cols="30"
                placeholder="Do you have any additional comments that will help us understand your report?*"
                required
              ></textarea>
            </div>
            <div className="submit-button-wrapper" >
              <RoundButton text={"Submit Form"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const RoundButton = ({ text }) => {
  return (
    <button className="contact-btn">
      <div className="contact-btn-inner" style={{background: '#7551E9', color: '#fff'}}>
        <span className="contact-btn-text"  style={{background: '#7551E9', color: '#fff'}}>{text}</span>
      </div>
    </button>
  );
};
