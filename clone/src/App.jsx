import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcom from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import chatgptlogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAi } from "./Ai";
const App = () => {
  const msgEnd=useRef(null);
  const[input,setInput]=useState("")
  const [message,setMessage]=useState([{
    text:"Hiiiii im chartgpt", 
    isBot:true,
  }]);
  useEffect(()=>{
    msgEnd.current.scrollIntoView();
  },[message])
  const handleSend=async()=>{
    const text=input;
    setInput('');
    setMessage([
      ...message,
      {text,isBot:false}
    ])
    const res=await sendMsgToOpenAi(text);
    console.log(res);
    setMessage([
      ...message,
      {text,isBot:false},
      {text:res,isBot:true}
    ]);
  }
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
              <div className="chat">
                <img className="chatImage" src={userIcon} alt="" /><p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque repellendus tenetur voluptates odio distinctio aspernatur beatae expedita dolorem mollitia aut.</p>
              </div>
              <div className="chat bot">
                <img className="chatImage" src={chatgptlogo} alt="" /><p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste laborum eos quisquam illo odit nobis a adipisci architecto sapiente! Voluptas iusto dolorum amet fugiat unde voluptates inventore, hic repellat perspiciatis ipsa. Perferendis iusto non, atque excepturi accusamus repudiandae quo officiis. Ex accusantium sed, et eos labore libero at eum ipsa corrupti quas unde ad odit incidunt earum assumenda, rem tempore quibusdam obcaecati expedita id deserunt non. Vel eveniet dolor eius error, repellendus nemo eligendi iste quis laudantium et dignissimos itaque voluptatem sint a iure, sapiente, eum tenetur beatae excepturi! Quas ipsa iste quos modi debitis velit repudiandae. Voluptatem, adipisci beatae!</p>
              </div>
              {message.map((message,i)=>
                  <div key={i} className={message.isBot?"chat bot":"chat"}>
                  <img className="chatImage" src={message.isBot?gptLogo:userIcon} alt="" /><p className="text">{message.text}</p>
                </div>
              )}
              <div ref={msgEnd}/>
          </div>
          <div className="chatFooter">
            <div className="inp">
              <input type="text" placeholder="Send a message" value={input} onChange={(e)=>{setInput(e.target.value)}} /><button className="send" onClick={handleSend}><img src={sendBtn} alt="send" /></button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default App;
