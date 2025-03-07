import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import Navbar from "./Navbar";
export default function Dashboard() {
  return (
    <>
      <div className="container">
        <Navbar></Navbar>
        <main class="content">
          <header class="header">
            <h1>Dashboard</h1>
            <div class="header-right">
              <button class="connect-wallet">Connect Wallet</button>
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
          <div>
            <div class="flex flex-col ">
              <div class="user-grid">
                <div
                  class="user-card"
                  style={{
                    background: "transparent",
                    border: "1px solid rgb(92, 37, 141)",
                  }}
                >
                  <h6>User ID</h6>
                  <p>-</p>
                  <h6>Rank</h6>
                  <p>-</p>
                </div>
                <div
                  class="user-card"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgb(92, 37, 141) 0%, rgb(51, 15, 122) 51%, rgb(92, 37, 141) 100%)",
                  }}
                >
                  <h6>My Wallet Fund</h6>
                  <p> 0 ETH</p>
                  <h6>My Wallet Address</h6>
                  <p>-</p>
                </div>
                <div
                  class="user-card"
                  style={{
                    background: "transparent",
                    border: "1px solid rgb(92, 37, 141)",
                  }}
                >
                  <h6>Referral Link</h6>
                  <p>-</p>
                  <h6>Referred By</h6>
                  <p>-</p>
                </div>
              </div>
              <section class="dashboard">
                <h2>Packages</h2>
                <div class="package-grid">
                  <div class="package-card">
                    <span>0.001</span>
                    <p style={{ color: "color: rgb(212, 55, 55)" }}>
                      FRONTLINE
                    </p>
                  </div>
                  <div class="package-card">
                    <span>0.00133</span>
                    <p style={{ color: " rgb(212, 139, 55)" }}>HOMESTEAD</p>
                  </div>
                  <div class="package-card">
                    <span>0.00266</span>
                    <p style={{ color: " rgb(209, 212, 55)" }}>METROPOLIS</p>
                  </div>
                  <div class="package-card">
                    <span>0.00533</span>
                    <p style={{ color: " rgb(55, 212, 133)" }}>SERENITY</p>
                  </div>
                  <div class="package-card">
                    <span>0.01066</span>
                    <p style={{ color: " rgb(55, 212, 204)" }}>POWERUP</p>
                  </div>
                  <div class="package-card">
                    <span>0.02133</span>
                    <p style={{ color: " rgb(55, 149, 212)" }}>SUPERB</p>
                  </div>
                  <div class="package-card">
                    <span>0.04266</span>
                    <p style={{ color: " rgb(162, 55, 212)" }}>MENTOR</p>
                  </div>
                  <div class="package-card">
                    <span>0.08533</span>
                    <p style={{ color: " rgb(212, 55, 102)" }}>ICON</p>
                  </div>
                  <div class="package-card">
                    <span>0.17066</span>
                    <p style={{ color: " rgb(160, 212, 54)" }}>DUPLEX</p>
                  </div>
                  <div class="package-card">
                    <span>0.34133</span>
                    <p style={{ color: " rgb(147, 99, 43)" }}>ALPHA</p>
                  </div>
                  <div class="package-card">
                    <span>0.68266</span>
                    <p style={{ color: " rgb(113, 114, 19)" }}>HELIX</p>
                  </div>
                  <div class="package-card">
                    <span>1.36533</span>
                    <p style={{ color: " rgb(230, 10, 76)" }}>AMBASSADOR</p>
                  </div>
                </div>
                <h2>Daily Royalty Countdown</h2>
                <div class="countdown-grid">
                  <div class="countdown-card">
                    <div
                      class="icon-container"
                      style={{
                        width: "25px",
                        height: "25px",
                        border: "1px solid rgb(175, 175, 175)",
                        padding: "2px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i class="fas fa-medal"></i>
                    </div>
                    <h6 style={{ color: "rgb(108, 151, 207)" }}>DUPLEX</h6>
                    <p> 0.00101322 ETH</p>
                    <p
                      style={{ fontSize: "14px", color: "rgb(108, 151, 207)" }}
                    >
                      250
                    </p>
                  </div>
                  <div class="countdown-card">
                    <div
                      class="icon-container"
                      style={{
                        width: "25px",
                        height: "25px",
                        border: "1px solid rgb(175, 175, 175)",
                        padding: "2px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i class="fas fa-award"></i>
                    </div>
                    <h6 style={{ color: "rgb(108, 207, 166)" }}>ALPHA</h6>
                    <p> 0.00050661 ETH</p>
                    <p
                      style={{ fontSize: "14px", color: "rgb(108, 207, 166)" }}
                    >
                      42
                    </p>
                  </div>
                  <div class="countdown-card">
                    <div
                      class="icon-container"
                      style={{
                        width: "25px",
                        height: "25px",
                        border: "1px solid rgb(175, 175, 175)",
                        padding: "2px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i class="fas fa-trophy"></i>
                    </div>
                    <h6 style={{ color: "rgb(207, 205, 108)" }}>HELIX</h6>
                    <p> 0.00050661 ETH</p>
                    <p
                      style={{ fontSize: "14px", color: "rgb(207, 205, 108)" }}
                    >
                      28
                    </p>
                  </div>
                  <div class="countdown-card">
                    <div
                      class="icon-container"
                      style={{
                        width: "25px",
                        height: "25px",
                        border: "1px solid rgb(175, 175, 175)",
                        padding: "2px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <i class="fas fa-crown"></i>
                    </div>
                    <h6 style={{ color: "rgb(207, 161, 108)" }}>Ambassador</h6>
                    <p> 0.00050661 ETH</p>
                    <p
                      style={{ fontSize: "14px", color: "rgb(207, 161, 108)" }}
                    >
                      37
                    </p>
                  </div>
                </div>
                <h1
                  class="royalty_heading"
                  style={{ textAlign: "center", marginTop: "3%" }}
                >
                  00 HH : 00 mm : 00 ss
                </h1>
                <div
                  class="total-grid"
                  style={{ marginTop: "center", marginBottom: "3%" }}
                >
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Total Income</h6>
                    </div>
                    <p>
                      0<span> ETH</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Referral Income</h6>
                    </div>
                    <p>
                      0<span> ETH</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Level Income</h6>
                    </div>
                    <p>
                      0<span> ETH</span>
                    </p>
                  </div>
                </div>
                <div class="total-grid" style={{ marginTop: "0px" }}>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Royalty Income</h6>
                    </div>
                    <p>
                      0<span> ETH</span>
                    </p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>My Community Size</h6>
                    </div>
                    <p>0</p>
                  </div>
                  <div class="total-card">
                    <div class="sub-total">
                      <h6>Direct Referrals</h6>
                    </div>
                    <p>0</p>
                  </div>
                </div>
                <table
                  class="responsive-table"
                  style={{ width: "70%", margin: "2rem auto" }}
                >
                  <thead>
                    <tr>
                      <th style={{ fontWeight: "600", fontSize: "18px" }}>
                        Rank
                      </th>
                      <th style={{ fontWeight: "600", fontSize: "18px" }}>
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Frontline
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Homestead
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Metropolis
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Serenity
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Powerup
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Superb
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Mentor
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        ICON
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        DUPLEX
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        ALPHA
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        HELIX
                      </td>
                      <td>0 ETH</td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "rgb(241, 239, 96)",
                          fontWeight: "500",
                        }}
                      >
                        Ambassador
                      </td>
                      <td>0 ETH</td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <h2>Rank Income</h2>
              <div className="rank-income" style={{ overflowX: "auto" }}>
                <table>
                  <tr>
                    <th>From</th>
                    <th>Amount (ETH)</th>
                    <th>Rank Level</th>
                    <th>Time</th>
                  </tr>
                  <tr>
                    {/* <td>-</td>
                    <td>0.0</td>
                    <td>Royalty</td>
                    <td>1/1/1970, 5:30 AM</td> */}
                  </tr>
                </table>
              </div>
              <div style={{ marginTop: "2%" }}>
                <div class="MuiStack-root css-1ov46kg">
                  <nav
                    aria-label="pagination navigation"
                    class="MuiPagination-root MuiPagination-text css-1xdhyk6"
                  >
                    <ul class="MuiPagination-ul css-51eq8m">
                      <li>
                        <FaArrowLeft />
                      </li>
                      <li>
                        <button
                          class="MuiButtonBase-root MuiPaginationItem-root MuiPaginationItem-sizeMedium MuiPaginationItem-text MuiPaginationItem-rounded Mui-selected MuiPaginationItem-page css-yv5wb4"
                          tabindex="0"
                          type="button"
                          aria-current="true"
                          aria-label="page 1"
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <FaArrowRight />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
