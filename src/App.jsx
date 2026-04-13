import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans">
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-grow" />
      </div>
    </Router>
  );
}

export default App;