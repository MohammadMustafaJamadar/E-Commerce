import React, { useState } from "react";
import UserInfo from "../Form/UserInfo";

export default function User() {
 const [user , setUser] = useState(JSON.parse(localStorage.getItem("Logginuser")))
  

  return (
    <>
    
    <UserInfo user={user} setUser={setUser} />

    </>
      );
}
