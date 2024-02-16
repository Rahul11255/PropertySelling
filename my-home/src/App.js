import "./App.css";
import Authpage from "./components/Auth/Authpage";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Auth/Profile";
import Body from "./components/body/body";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import Singleproperty from "./components/SingleCard/Singleproperty";
import View from "./components/view/View";
// import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/auth" element={<Authpage />}>
          <Route index element={<Login />} />
          <Route exact path="register" element={<Register />} />
        </Route>
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/createproperty" element={<Create />} />
        <Route exact path="/propertycard/:id" element={<Singleproperty />} />
        <Route exact path="/view" element={<View />} />
      </Routes>
      
    </div>
  );
}

export default App;
