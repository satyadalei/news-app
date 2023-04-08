import React from "react";
import '../Loader.css'
export default function Loader() {
  return (
    <>
    <div className="container text-center" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}} >
    {/* <div className="container text-center" style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",marginTop:"3Svh"}} > */}
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <br />
        <p style={{fontSize:"1rem"}} >Loading...</p>
    </div>
    </>
  );
}

