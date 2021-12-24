// imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserSessionProvider } from './userContextFile';

// Import Components
import Login from "./Pages/Login.js";
import Account from "./Pages/Account";
import SignUp from "./Pages/SignUp.js";
import NavBar from "./Component/NavBar";
import HomePage from "./Pages/HomePage.js";
import VolunteerForm from "./Pages/VolunteerForm.js";
import VolunteerList from "./Pages/VolunteerList.js";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <UserSessionProvider>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<SignUp/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/volunteerForm" element={<VolunteerForm/>} />
            <Route path="/volunteerList" element={<VolunteerList/>} />
          </Routes>
        </UserSessionProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
