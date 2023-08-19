import React from "react";
import SideDisplay from "./SideDisplay";
import "../public/styles/Signup.css";
import FormNested from "./Form";
import { useFormikContext } from "formik";
const Signup = () => {
  const handleSubmit=({values,setSubmitting})=>{
      console.log(values);
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
  }
  return (
    <div className="container">
         <div className="form-wrapper">
      <header className="header">
        <p style={{ color: "black",fontWeight:"bold",textAlign:"center"}}>
          Your World, Your Words: Unleash Conversations with Our Interactive
          Chat!
        </p>
      </header>
      <div className="form-container">
        <h3>Sign in</h3>
        <h5>If You don't have an account you can register</h5>
        <h5> You can <a href="#" >Register here</a></h5>
        <FormNested handleSubmit1={handleSubmit}/>
      </div>
     </div>
      <SideDisplay />
      </div>
  );
};

export default Signup;
