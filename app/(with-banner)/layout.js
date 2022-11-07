import React from "react";

function layout({ children }) {
  return (
    <div>
      <marquee style={{color: 'purple' , background: '#fff'}}> 😺 El mejor canal de Twitch de Programacion </marquee>
      {children}
    </div>
  );
}

export default layout;
