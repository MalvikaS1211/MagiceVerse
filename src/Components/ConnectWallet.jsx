import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import toast from "react-hot-toast";

function ConnectWallet() {
  useEffect(() => {
    const checkWallet = () => {
      try {
        const elements = document.getElementsByClassName("ju367v8r");

        console.log(elements[0], elements[0]?.textContent, elements.length);

        if (window.ethereum?.isTrust) {
          toast.error("Trust Wallet detected");

          Array.from(elements).forEach((element) => {
            if (element.textContent.trim() === "MetaMask") {
              element.textContent = "Trust Wallet";
            }
          });
        } else {
          toast.error("Please use Trust Wallet");
        }
      } catch (error) {
        toast.error(error.message || "An error occurred");
      }
    };

    // checkWallet();
  }, []);

  return (
    <div className="d-grid">
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");

          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
              className="d-grid"
            >
              {(() => {
                if (!connected) {
                  return (
                    <>
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className="connect-wallet"
                      >
                        Connect Wallet
                      </button>
                    </>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }

                return (
                  <div
                    style={{ display: "grid", gap: 12 }}
                    className="d-flex botttons-wallet"
                  >
                    <button
                      onClick={openChainModal}
                      style={{ display: "flex", alignItems: "center" }}
                      type="button"
                      className="btn btn-success-gradient btn-wave chain-btn-wallet"
                    >
                      {chain.hasIcon && (
                        <div
                          style={{
                            background: chain.iconBackground,
                            width: 12,
                            height: 12,
                            borderRadius: 999,
                            overflow: "hidden",
                            marginRight: 4,
                          }}
                        >
                          {chain.iconUrl && (
                            <img
                              alt={chain.name ?? "Chain icon"}
                              src={chain.iconUrl}
                              style={{ width: 12, height: 12 }}
                            />
                          )}
                        </div>
                      )}
                      {chain.name}
                    </button>

                    <button
                      onClick={openAccountModal}
                      type="button"
                      className="btn btn-success-gradient btn-wave"
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </button>
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}

export default ConnectWallet;
