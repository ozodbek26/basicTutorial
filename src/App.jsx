import { Routes, Route } from "react-router-dom";

import HomeLogin from "./pages/HomeLogin/HomeLogin";
import MainPage from "./pages/MainPage/MainPage";
import CreateAccount from "./pages/CreateAccount/CreateAccount";

import { useNavigate } from "react-router-dom";
import UserComments from "./pages/UserComments/UserComments";
import UserProfile from "./pages/UserProfile/UserProfile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLogin />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path="/userComments" element={<UserComments />} />
      <Route path="/UserProfile" element={<UserProfile />} />
    </Routes>
  );
}

export default App;
