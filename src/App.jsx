import React from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import Heroes from "./Components/Heroes";
import Villains from "./Components/Villains";
import About from "./Components/About";
import AddEntry from "./Components/AddEntry";
import EditEntry from "./Components/EditEntry";
import NotFound from "./Components/NotFound";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <div>
      <Header />
      <GlobalProvider>
      <Routes>
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/villains" element={<Villains />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-entry" element={<AddEntry />} />
        <Route path="/edit-entry/:id" element={<EditEntry />} />
        <Route path="/" element={<div><MainContent /> </div>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </GlobalProvider>
    </div>
  );
}

/* Advised routing standard does not work due 
        to change in React Router V6
        <Route path="/heroes"><Heroes /></Route>
        <Route path="/villains"><Villains /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/add-entry"><AddCharacter /></Route>
        <Route path="/edit-entry"><EditCharacter /></Route>
        <Route path="/"><MainContent /></Route>
        <Route path="*"><NotFound /></Route> */
