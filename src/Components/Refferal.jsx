import React from "react";
import Navbar from "./Navbar";
import ConnectWallet from "./ConnectWallet";

export default function Refferal() {
  return (
    <>
      <Navbar></Navbar>
      <main class="content">
        <header class="header">
          <h1>Referral</h1>
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
                style={{ color: "rgb(255, 255, 255);" }}
              >
                <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
              </svg>
            </button>
          </div>
        </header>
        <div>
          <div class="flex flex-col" style={{ height: "100vh" }}>
            <div class="rank-income" style={{ overflowX: "auto" }}>
              <table>
                <tr>
                  <th>Sr.No</th>
                  <th>Id</th>
                  <th>Address</th>
                  <th>Activation Date</th>
                  <th>Level</th>
                  <th>Direct Team</th>
                </tr>
                <tr>
                  <td>0</td>
                  <td>0</td>
                  <td>0...</td>
                  <td>dd-mm-yyyy</td>
                  <td>0</td>
                  <td>0</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
