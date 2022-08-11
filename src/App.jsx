import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Heroes from "./Components/Heroes";
import Villains from "./Components/Villains";
import About from "./Components/About";
import AddEntry from "./Components/AddEntry";
import EditEntry from "./Components/EditEntry";
import { Routes, Route, Outlet} from "react-router";
export default function App() {
  return (
    <div className="app">
      <Header />
      <Routes> 
          <Route path="/" element={<MainContent />} />
          <Route path="heroes" element={<Heroes/>} />
          <Route path="villains" element={<Villains/>} />
          <Route path="about" element={<About/>} />
          <Route path="editentry" element={<EditEntry />}/>
          <Route path="addentry" element={<AddEntry />}/>

          
        </Routes>
    </div>
  );
}
