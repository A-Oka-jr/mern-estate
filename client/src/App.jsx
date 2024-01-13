import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Abuot from "./pages/Abuot";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import SignOut from "./pages/SignOut";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/about" element={<Abuot />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
