import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-linkedin"></i>
        <i className="topIcon fab fa-github"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">ANASAYFA</li>
          <li className="topListItem">HAKKIMDA</li>
          <li className="topListItem">İLETİŞİM</li>
          <li className="topListItem">YAZILAR</li>
          <li className="topListItem">ÇIKIŞ</li>
        </ul>
      </div>
      <div className="topRigth">
        <img className="topImg" src="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
};

export default TopBar;
