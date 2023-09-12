// import Counter from "./pages/Counter";

// libraries
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// pages
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-zinc-950 h-screen">
      <Router>
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
