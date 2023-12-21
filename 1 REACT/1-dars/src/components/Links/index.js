import React from "react";
import AirHub from "../../assets/airhub.png";
import Google from "../../assets/Google.svg";
import Slack from "../../assets/Slack.svg";
import Amazon from "../../assets/Amazon.png";

function Links() {
  return (
    <div className="flex gap-3 items-center justify-around my-5">
      <img src={AirHub} alt="" />
      <img src={Google} alt="" />
      <img src={Slack} alt="" />
      <img src={Amazon} alt="" />
    </div>
  );
}

export default Links;
