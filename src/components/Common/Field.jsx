import React from "react";
import { EyeClose, EyeOpen } from "../../svgs";
import { useState } from "react";

export default function Field({ type, placeholder, stickyLabel, value, onChange }) {
  const [show,setShow] = useState(false)
  return (
    <div className="field">
      {stickyLabel && <label>linktr.ee/</label>}
      <div style={{ flexGrow: "1"}}>
        <input type={show ? 'text' : type} placeholder={placeholder} style={{width: '100%'}} value={value} onChange={onChange}/>
        {type=== 'password' && <span style={{position: 'absolute', right: 15, top: 17, cursor: 'pointer'}} onClick={() => setShow(x => !x)}>{!show ? <EyeClose/>: <EyeOpen/>}</span>}
      </div>
    </div>
  );
}
