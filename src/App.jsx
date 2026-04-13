import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import FriendDetails from "./components/FriendDetails/FriendDetails";

function App() {
  const [friends, setFriends] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  const addTimelineEntry = (entry) => setTimeline([entry, ...timeline]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#f8fafc] font-sans">
        <Toaster position="top-right" />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home friends={friends} loading={loading} />}
            />
            <Route
              path="/friend/:id"
              element={
                <FriendDetails
                  friends={friends}
                  addTimelineEntry={addTimelineEntry}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
