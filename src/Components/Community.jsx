import React from "react";
import Navbar from "./Navbar";
import Favicon from "../assets/Favicon.png";
import ConnectWallet from "./ConnectWallet";
export default function Community() {
  return (
    <>
      <Navbar></Navbar>
      <main className="content">
        <header class="header">
          <h1>Community</h1>
          <div class="header-right">
            <ConnectWallet />
            <button class="menu-btn" id="menu-btn">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                color="#fff"
                font-size="20"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "rgb(255, 255, 255)" }}
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </button>
          </div>
        </header>
        <div
          className="flex flex-col"
          style={{
            height: "auto",
            minHeight: "100vh",
            overflow: "hidden",
            marginBottom: "5%",
          }}
        >
          <div className="community_div">
            <div className="button_container">
              <input
                type="text"
                className="ComunitySearch placeholder-white"
                placeholder="Enter User ID"
                defaultValue="0"
                style={{
                  backgroundColor: "rgb(34, 34, 34)",
                  borderRadius: "30px",
                  cursor: "pointer",
                  color: "rgb(255, 255, 255)",
                  outline: "none",
                  border: "1px solid rgb(46, 46, 46)",
                  paddingLeft: "15px",
                }}
              />
              <button
                className="btn"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgb(33, 82, 175) 0%, rgb(107, 167, 231) 51%, rgb(33, 82, 175) 100%);",
                  borderRadius: "30px",
                }}
              >
                Search
              </button>
            </div>
            <div className="button_container" style={{ marginTop: "5%" }}>
              <button
                disabled
                style={{
                  borderRadius: "20px",
                  width: "150px",
                  backgroundColor: "rgb(26, 26, 26)",
                  height: "40px",
                  color: "rgb(255, 255, 255)",
                  cursor: "not-allowed",
                  fontSize: "16px",
                  borderColor: "rgb(26, 26, 26)",
                  fontFamily: "Geist Mono",
                }}
              >
                PREV
              </button>
              <button
                disabled
                style={{
                  borderRadius: "20px",
                  width: "120px",
                  height: "40px",
                  backgroundColor: "rgb(26, 26, 26)",
                  color: "rgb(255, 255, 255)",
                  cursor: "not-allowed",
                  fontSize: "16px",
                  borderColor: "rgb(26, 26, 26)",
                  fontFamily: "Geist Mono",
                }}
              >
                NEXT
              </button>
            </div>
          </div>
          <div className="tree">
            <img
              src={Favicon}
              alt="Tree Logo"
              style={{
                marginTop: "1vh",
                width: "90px",
                height: "70px",
                cursor: "pointer",
              }}
            />
            <div className="logo">0</div>
            <div className="branch-connector">
              <div className="line vertical"></div>
              <div className="line horizontal"></div>
              <div className="line diagonal-left"></div>
              <div className="line diagonal-right"></div>
            </div>
            <div className="branches">
              {[...Array(2)].map((_, index) => (
                <div className="branch-item" key={index}>
                  <img
                    src={Favicon}
                    alt="Branch Logo"
                    style={{
                      marginTop: "1vh",
                      width: "90px",
                      height: "70px",
                      cursor: "pointer",
                    }}
                  />
                  <p>0</p>
                  <button style={{ cursor: "pointer" }}>Vacant</button>
                  <div className="branch-connector2">
                    <div className="line vertical"></div>
                    <div className="line horizontal"></div>
                    <div className="line diagonal-left">
                      <div className="status-container">
                        <img
                          src={Favicon}
                          alt="Status Logo"
                          style={{
                            marginTop: "1vh",
                            width: "90px",
                            height: "70px",
                            cursor: "pointer",
                          }}
                        />
                        <p>0</p>
                        <button style={{ cursor: "pointer" }}>Vacant</button>
                      </div>
                    </div>
                    <div className="line diagonal-right">
                      <div className="status-container2">
                        <img
                          src={Favicon}
                          alt="Status Logo"
                          style={{
                            marginTop: "1vh",
                            width: "90px",
                            height: "70px",
                            cursor: "pointer",
                          }}
                        />
                        <p>0</p>
                        <button style={{ cursor: "pointer" }}>Vacant</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
