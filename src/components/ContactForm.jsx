import React from "react";
import Field from "./Common/Field";

export default function ContactForm() {
  return (
    <div className="users1">
      <h1 className="user-heading">
        <span>Contact us</span>
      </h1>
      <p className="contact-text">
        Need to contact CelebriLinks? Simply use the form for your options.
      </p>

      <div>
        <div className="contact-form-wrapper d-flex justify-content-center">
          <form action="#" className="contact-form">
            <h5 className="title">Contact us</h5>
            <p className="description">
              Feel free to contact us if you need any assistance, any help or
              another question.
            </p>
            <Field type="text" placeholder="Username" stickyLabel />
            <Field type="email" placeholder="email" />
            <Field type="text" placeholder="Subject" />

            <div>
              <textarea
                id="message"
                className="form-control rounded border-white mb-3 form-text-area"
                rows="5"
                cols="30"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="submit-button-wrapper">
              <RoundButton text={"Send message"} />
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
      <div className="contact-btn-inner">
        <span className="contact-btn-text">{text}</span>
      </div>
    </button>
  );
};
