import React from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={
                "https://ipfs.thirdweb.com/ipfs/QmQAcLywRXMBs1YMumL29z9LEyPK3rJGcKKUAZjpYyKi6d"
              }
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">Bandana Punk</div>
          <span className="itemNumber">•#3</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src={
                "https://ipfs.thirdweb.com/ipfs/QmQAcLywRXMBs1YMumL29z9LEyPK3rJGcKKUAZjpYyKi6d"
              }
              alt=""
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x44359B0D8eB3eeF4AeFab7a452b8c9aBD276a531</div>
              <div className="ownerHandle">@punk</div>
            </div>
          </div>
          <div className="ownerLink">
            <img src={instagramLogo} alt="" />
          </div>
          <div className="ownerLink">
            <img src={twitterLogo} alt="" />
          </div>
          <div className="ownerLink">
            <img src={moreIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
