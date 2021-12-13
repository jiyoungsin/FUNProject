// imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserSessionProvider } from './userContextFile';

// Import Components
import HomePage from "./Pages/HomePage.js";
import SignUp from "./Pages/SignUp.js";
import Login from "./Pages/Login.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <UserSessionProvider>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </UserSessionProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
