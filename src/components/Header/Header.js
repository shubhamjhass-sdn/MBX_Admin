import React, { useState } from "react";
import Logo from "../../Assets/logo.png";
import user from "../../Assets/Ellipse.png";
import message from "../../Assets/message.png";
import bell from "../../Assets/bell.png";
//import { Routes, Route, Link } from "react-router-dom";
import "./style.scss";
import { Badge } from "antd";
const Header = () => {
  const[show , setshow]= useState(true)
  return (
    <>
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img src={Logo} />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <div className="d-flex">
                <div>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <div class="profile-container">
                      <div class="profile-image">
                        <img src={user} />
                      </div>
                      <div>
                        <div className="profile-user">Alex Berman</div>
                        <div className="profile-role">Administrator</div>
                      </div>
                    </div>
                  </ul>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "10%",
                    marginLeft: 48,
                    alignItems: "center",
                  }}
                >
                  <div className="message px-4">
                    <Badge count={7}
                    style={{
                      margin: "4px",
                    }}>
                    <img src={message} />
                    </Badge>
                  </div>
                  <div className="bellIcon">
                  <Badge dot={show} style={{
                    margin: "7px",
                    color: "#F48327"

                  }}>
                  <img src={bell} />
                  </Badge>
                    
                  </div>
                </div>
              </div>
              <div>
                <form
                  class="d-flex"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignSelf: "flex-end",
                  }}
                >
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <i class="fa fa-search"></i>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    
    </>
  );
};

export default Header;
