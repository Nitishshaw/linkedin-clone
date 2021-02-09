import React from "react";
import "./Widgets.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoOutlinedIcon />
      </div>
      {newsArticle("react", "best frontend liabrary")}
      {newsArticle(
        "Disaster",
        " //Villagers suspect radioactive device behind Uttarakhand disaster"
      )}
      {newsArticle("Covid-19", " '97% satisfied with vaccination experience'")}
      {newsArticle(
        "sports",
        "'Test shifted in Eng's favour during 1st innings'"
      )}
      {newsArticle(
        "External Affair",
        "India, Afghanistan ink MoU to build dam in Kabul"
      )}
      {newsArticle(
        "Politics",
        "Nitish expands cabinet, 17 new ministers inducted"
      )}
      {newsArticle(
        "Technology",
        "Xiaomi has ‘good news’ for these Mi, Redmi users"
      )}
    </div>
  );
}

export default Widgets;
