import React from "react";
import { EyeOpen } from "../../svgs";

export default function Field({ type, placeholder, stickyLabel, value, onChange }) {
  return (
    <div className="field">
      {stickyLabel && <label>linktr.ee/</label>}
      <div style={{ flexGrow: "1"}}>
        <input type={type} placeholder={placeholder} style={{width: '100%'}} value={value} onChange={onChange}/>
        {type=== 'password' && <span style={{position: 'absolute', right: 15, top: 17, cursor: 'pointer'}}><EyeOpen/></span>}
      </div>
    </div>
  );
}
