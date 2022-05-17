import React from 'react'
var style = {
    fontSize:"16px",
    backgroundColor:"blue",
    borderRadius:"20px",
    padding:"12px",
    border:"none",
    cursor:"pointer",
    textAlign:"center",
    fontWeight:"bold",
    color:"white"
}
const Button = () => {
  return (
    <div>
      <button style={style}>Contacts</button>
    </div>
  )
}

export default Button
