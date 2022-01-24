import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Smart-Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
            <span className="topIconBadge">2</span>
          </div>

          <img
            src="https://scontent-bom1-2.xx.fbcdn.net/v/t39.30808-6/269996213_4584052241701545_5206914616071488246_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vgYxMxoj50AAX-jkbU4&_nc_ht=scontent-bom1-2.xx&oh=00_AT-f5m28bEg8fdRtj3Xr5M6rGT3_Sgdj-Ym0pGeoikbiVA&oe=61E0453C"
            alt="avatar"
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
