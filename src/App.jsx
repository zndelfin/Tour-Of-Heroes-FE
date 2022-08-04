import React from "react";
import "./App.css";
import Entry from "./Components/Entry";
import Header from "./Components/Header";
import Navigator from "./Components/Navigator"
// import Menu from "./Components/Menu"

export default function App() {
  return (
    <div>
       <Header />
       {/* <Menu /> */}
       <Navigator />
        <Entry />

    </div>
  
  );
}

