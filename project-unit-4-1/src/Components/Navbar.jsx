import React from "react";
import "./Css/Navbar.css";

function Navbar() {
  return (
    <>
      <div
        style={{
          display: "block",
          display: "flex",
          // border: "1px solid red",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80vw",
          margin: "auto",
        }}
      >
        <div
          style={
            {
              // display: "flex",
              // border: "1px solid red",
            }
          }
        >
          <img src="https://i.imgur.com/O0cHqo6.jpg" width="240px" alt="" />
        </div>
        <div
          style={{
            border: "2px solid yellow",
            display: "flex",
            height: "35px",
            // width: "30vw",
            alignItems: "center",
            paddingLeft: "10px",
            borderRadius: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              marginRight: "25px",
            }}
          >
            <p>All</p>
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20enable-background%3D%22new%200%200%2064%2064%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cpath%20fill%3D%22%23134563%22%20d%3D%22m-218.7-308.6%202-2%2011.7%2011.8%2011.7-11.8%202%202-13.7%2013.7-13.7-13.7%22%20transform%3D%22translate(237%20335)%22%2F%3E%3C%2Fsvg%3E
          "
              alt=""
            />
          </div>
          <input
            type="text"
            placeholder="Search here"
            style={{
              border: "0px solid green",
              width: "400px",
              height: "30px",
              outline: "none",
            }}
          />
          <div
            style={{
              // border:'1px solid ',
              height: "36px",
              width: "55px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "0px 20px 20px 0px",
              background: "yellow",
            }}
          >
            <img
              src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2064%2064%22%3E%3Cg%20fill%3D%22%23134563%22%3E%3Cpath%20d%3D%22M27.7%2047.1C17%2047.1%208.2%2038.4%208.2%2027.6c0-10.7%208.7-19.5%2019.5-19.5s19.5%208.7%2019.5%2019.5c-.1%2010.8-8.8%2019.5-19.5%2019.5zm0-36.1C18.5%2011%2011%2018.5%2011%2027.7s7.5%2016.7%2016.7%2016.7%2016.7-7.5%2016.7-16.7C44.3%2018.5%2036.8%2011%2027.7%2011z%22%2F%3E%3Cpath%20d%3D%22M53.7%2055.8%2040.1%2042.3l2.2-2.2%2013.5%2013.6-2.1%202.1%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E
          "
              alt=""
              width="27px"
            />
          </div>
        </div>
        <div
          style={{
            // border: "1px solid red",
            alignItems: "center",
            display: "flex",
            width: "100px",
            height: "40px",
          }}
        >
          <img
            src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20101%20101%22%3E%3Cpath%20d%3D%22M50.4%2054.5c10.1%200%2018.2-8.2%2018.2-18.2S60.5%2018%2050.4%2018s-18.2%208.2-18.2%2018.2%208.1%2018.3%2018.2%2018.3zm0-31.7c7.4%200%2013.4%206%2013.4%2013.4s-6%2013.4-13.4%2013.4S37%2043.7%2037%2036.3s6-13.5%2013.4-13.5zM18.8%2083h63.4c1.3%200%202.4-1.1%202.4-2.4%200-12.6-10.3-22.9-22.9-22.9H39.3c-12.6%200-22.9%2010.3-22.9%2022.9%200%201.3%201.1%202.4%202.4%202.4zm20.5-20.5h22.4c9.2%200%2016.7%206.8%2017.9%2015.7H21.4c1.2-8.9%208.7-15.7%2017.9-15.7z%22%2F%3E%3C%2Fsvg%3E
        "
            alt=""
            width="40px"
          />
          <p>Sign In</p>
        </div>
        <div
          style={{
            // border: "1px solid red",
            alignItems: "center",
            display: "flex",
            width: "110px",
            height: "40px",
          }}
        >
          <img
            src="data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%3E%3Cpath%20d%3D%22M20.16%2C5A6.29%2C6.29%2C0%2C0%2C0%2C12%2C4.36a6.27%2C6.27%2C0%2C0%2C0-8.16%2C9.48l6.21%2C6.22a2.78%2C2.78%2C0%2C0%2C0%2C3.9%2C0l6.21-6.22A6.27%2C6.27%2C0%2C0%2C0%2C20.16%2C5Zm-1.41%2C7.46-6.21%2C6.21a.76.76%2C0%2C0%2C1-1.08%2C0L5.25%2C12.43a4.29%2C4.29%2C0%2C0%2C1%2C0-6%2C4.27%2C4.27%2C0%2C0%2C1%2C6%2C0%2C1%2C1%2C0%2C0%2C0%2C1.42%2C0%2C4.27%2C4.27%2C0%2C0%2C1%2C6%2C0A4.29%2C4.29%2C0%2C0%2C1%2C18.75%2C12.43Z%22%2F%3E%3C%2Fsvg%3E
        "
            alt=""
            width="40px"
          />
          <p>Favorites</p>
        </div>
        <div
          style={{
            // border: "1px solid red",
            alignItems: "center",
            display: "flex",
            width: "80px",
            height: "40px",
          }}
        >
          <img
            src="https://cdn.iconscout.com/icon/premium/png-128-thumb/cart-2014450-1717663.png
        "
            alt=""
            width="40px"
          />
          <p>Cart</p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
