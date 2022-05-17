import React from "react";

const arr = ["Service","Projects","About"];
const Links = () => {
  return (
    <div>
      <ul style={{display:"flex",listStyleType:"none",marginTop:"30px",justifyContent:"space-around",alignItems:"center",width:"250px",fontSize:"18px",cursor:"pointer",color:"white"}}>
          {/* <li>Service</li>
          <li>Projects</li>
          <li>About</li> */}
          {arr.map((item)=>
             <li>{item}</li>
          )}
      </ul>
    </div>
  );
};

export default Links;
