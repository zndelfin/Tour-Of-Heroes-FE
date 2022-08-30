import './App.css';
import { Header } from "./Components/Header";
import { MainContent } from "./Components/MainContent";
import { Heroes } from "./Components/Heroes";
import { Villains } from "./Components/Villains";
import { About } from "./Components/About";
import { AddEntry } from "./Components/AddEntry";
import { EditEntry } from "./Components/EditEntry";
import { NotFound } from "./Components/NotFound";
import { Footer } from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalState";


function App() {
  return (
    <div>
    <Header />
    <GlobalContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/heroes" element={ <Heroes />} />
          <Route path="/villains" element={<Villains />}/> 
          <Route path="/about" element={<About />} /> 
          <Route path="/add-entry" element={<AddEntry />} />
          <Route path="/edit-entry/:id" element={<EditEntry />} /> 
          <Route path="/"element={ <MainContent /> } /> 
          <Route path="*" element={<NotFound />} /> 
          </Routes>
      </BrowserRouter>
    </GlobalContextProvider>
    <Footer />
  </div>
  );
}

export default App;
