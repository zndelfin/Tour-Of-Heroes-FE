import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
// import Title from "./Components/Title";
import EditEntry from "./Components/EditEntry";
import AddEntry from "./Components/AddEntry";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <Header />
{/*
      <Routes>
        <Route path="/editentry" element={<EditEntry />} />
        <Route path="/addentry" element={<AddEntry />} />
      </Routes> */}

      <MainContent />
    </div>
  );
}
