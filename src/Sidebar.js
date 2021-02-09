import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectuser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectuser);

  const recentitem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1612403953343-800ea2e9b723?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600"
          alt=""
        />
        <Avatar src={user.photoURL} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed You</p>
          <p className="sidebar__statnumber">542</p>
        </div>
        <div className="sidebar__stat">
          <p>Viewes On Post</p>
          <p className="sidebar__statnumber">5454</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentitem("react")}
        {recentitem("programming ")}
        {recentitem("software engineering")}
        {recentitem("web development")}
        {recentitem("fun")}
        {recentitem("fitness")}
      </div>
    </div>
  );
}

export default Sidebar;
