import React from "react";
import "./whoWeAre.css";

function WhoWeAre({ data }) {
  function renderWho() {
    return data?.records
      .filter((e) => e?.fields.who_we_are !== undefined)
      .map((x, idx) => <div key={idx}>{x.fields.who_we_are}</div>);
  }
  return <div className="who__container" id="who">{renderWho()}</div>;
}

export default WhoWeAre;
