import React, { useRef } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Chatbot from "../components/Chatbot";

function Home() {


  return (
    <div>
      <Navbar />
      <Header />
    
      <Chatbot />
    </div>
  );
}

export default Home;
