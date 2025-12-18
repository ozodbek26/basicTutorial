import { Routes, Route } from "react-router-dom";

import HomeLogin from "./pages/HomeLogin/HomeLogin";
import MainPage from "./pages/MainPage/MainPage";
import CreateAccount from "./pages/CreateAccount/CreateAccount";

import { useNavigate } from "react-router-dom";
import UserComments from "./pages/UserComments/UserComments";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLogin />} />
      <Route path="/mainPage" element={<MainPage />} />
      <Route path="/createAccount" element={<CreateAccount />} />
      <Route path="/userComments" element={<UserComments />} />
    </Routes>
  );
}

export default App;
