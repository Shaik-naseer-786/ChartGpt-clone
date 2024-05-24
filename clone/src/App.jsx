import React from "react";
import "./App.css";
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcom from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
const App = () => {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="" className="logo" />
            <span className="brand">ChartGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcom} alt="Query" />
              What is Programming?
            </button>
            <button className="query">
              <img src={msgIcom} alt="Query" />
              How to use Api?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="" className="listitemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="" className="listitemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="" className="listitemsImg" />Upgrade to Pro</div>

        </div>
      </div>
      <div className="main">
          <div className="chats">

          </div>
          <div className="chatFooter">
            
          </div>
      </div>
    </div>
  );
};

export default App;
