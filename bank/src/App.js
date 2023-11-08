import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Sign from './pages/sign-in'
import User from './pages/User';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-it" element={<Sign />} />
      <Route path="/user" element={<User />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
