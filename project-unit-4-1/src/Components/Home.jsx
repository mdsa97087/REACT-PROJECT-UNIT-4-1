import React from "react";
import { Link, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./Css/Home.css";
import ImageSlider, { Slide } from "react-auto-image-slider";

function Home() {
  return (
    <>
      <div
        style={{
          border: "1px solid green",
          margin: "auto",
          width: "80vw",
        }}
      >
        <Navbar />
        <div
          style={{
            // border: "3px solid green",
            display: "flex",
            margin: "auto",
            width: "80vw",
            textAlign: "center",
            height: "6vh",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                background: "black",
                // border: "1px solid red",
                width: "250px",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                height: "6vh",
              }}
            >
              <h2>Category</h2>
            </div>
          </div>
          <div
            style={{
              // border: "1px solid red",
              width: "1200px",
              height: "6vh",
              display: "flex",
              background: "yellow",
              alignItems: "center",
            }}
          >
            <div
              style={{
                // border:'1px solid red',
                width: "200px",
                // height: "6vh",
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
        <div
          style={{
            // border: "1px solid red",
            margin: "auto",
            display: "flex",
          }}
        >
          <div
            style={{
              display: "grid",
              border: "1px solid blue",
              width: "230px",
              height: "400px",
              paddingLeft: "15px",
            }}
          >
            <Link className="Link" to="/">
              Consumer Electronics
            </Link>

            <Link className="Link">Industrial & Scientific</Link>
            <Link className="Link">Cell Phones & Accessories</Link>
            <Link className="Link">Appliances</Link>
            <Link className="Link">Outdoors, Fitness & Sports</Link>
            <Link className="Link">Computers,Tablets & Office</Link>
            <Link className="Link">Health & Personal Care</Link>
            <Link className="Link">Home Improvement & Tools</Link>
            <Link className="Link">Drones,Toyes & Hobbies</Link>
            <Link className="Link">Home & Garden</Link>
            <Link className="Link">Men's Fashion</Link>
            <Link className="Link">Watches & Jewelry</Link>
            <Link className="Link">Gearbest Promotion</Link>
            <Link className="Link">Motor & Car Electronics</Link>
          </div>
          <div
            style={{
              border: "1px solid red",
              width: "850px",
              height: "400px",
            }}
          >
            <ImageSlider
              style={{
                border: "1px solid red",
                width: "850px",
                height: "400px",
              }}
              effectDelay={400}
              autoPlayDelay={2000}
            >
              <Slide
              style={{
                border: "1px solid yellow",
                width: "850px",
                height: "450px",
              }}
              >
                <img
                  className="slideimg"
                  style={{
                    width: "850px",
                    height: "400px",
                  }}
                  src="https://uidesign.gbtcdn.com/GB/image/8823/home_1190x420_en.jpg
                  "
                  alt="..."
                />
              </Slide>
              <Slide>
                <img
                  className="slideimg"
                  style={{
                    width: "850px",
                    height: "400px",
                  }}
                  src="https://uidesign.gbtcdn.com/GB/image/8823/1190X420.jpg
                  "
                  alt="..."
                />
              </Slide>
              <Slide>
                <img
                  className="slideimg"
                  style={{
                    width: "850px",
                    height: "400px",
                  }}
                  src="https://uidesign.gbtcdn.com/GB/image/8823/electronics_1190x420_en.jpg
                  "
                  alt="..."
                />
              </Slide>
            </ImageSlider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
