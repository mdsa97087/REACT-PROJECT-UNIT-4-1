import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <div>
        <Navbar />
        <div
          style={{
            border: "1px solid green",
            display: "flex",
            margin: "auto",
            width: "80vw",
            textAlign: "center",
            height: "6vh",
            alignItems: "center",
          }}
        >
          <div
            style={{
              // border:'1px solid red',
              width: "200px",
              background: "black",
              color: "white",
              height: "6vh",
            }}
          >
            <h2>Category</h2>
          </div>
          <div
            style={{
              border: "1px solid red",
              width: "250px",
              height: "6vh",
              display: "flex",
            }}
          >
            <div
              style={{
                // border:'1px solid red',
                width: "250px",
                height: "6vh",
              }}
            >
              <h3>SUPER DEALS</h3>
            </div>
            <div
              style={{
                // border:'1px solid red',
                width: "250px",
              }}
            >
              <h3>APP ONLY</h3>
            </div>
            <div
              style={{
                // border:'1px solid red',
                width: "250px",
              }}
            >
              <h3>NEW ARRIVALS</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
