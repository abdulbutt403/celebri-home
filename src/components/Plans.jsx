import React from "react";
import useResponsive from "../Hooks/responsive";
import Card from "./Common/Card";

export default function Plans() {
  const isMobile = useResponsive();
  return (
    <div className="plans-wrap">
      <h2 className="plans-text">
        The fast, friendly and powerful link in bio tool.
      </h2>

      <div className={!isMobile ? "mt-48" : ""} style={!isMobile ? {marginBottom: 60}:{marginBottom: 60, marginTop: 20} }>
        <div className="plans-btn iRpCZj">
          <span className="plans-btn-text">Explore all plans</span>
        </div>
      </div>

      <div style={{display: 'flex', width: "91.2%", margin: 'auto', justifyContent: "space-between", gap: isMobile ? 20: 'auto', maxWidth: isMobile ?  '90vw': 'auto', overflowX: 'scroll' , paddingBottom: 20}}>
        <Card src={'card1.png'} width={'87%'} text={'Seamlessly connect your CelebriLinks with the tools you already use.'}/>
        <Card src={'card2.png'} width={'70%'} text={'Customize your CelebriLinks to match your brand. Make it feel like you.'}/>
        <Card src={'card3.png'} width={'80%'} text={'Manage, update and schedule content with our quick, easy editor.'}/>
      </div>

    </div>
  );
}
