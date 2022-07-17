import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Layout from "./components/Layout";
import NotFound from "./components/not-found/NotFound";
import Dashboard from "./pages/dashboard/Dashboard";
import AuthService from "./services/auth.service";
import { useEffect, useState, useContext } from "react";
import Authcontext from "./context/AuthProvider";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword.jsx";
import ResetPassword from "./pages/resetPassword/ResetPassword";



function App() {
  const {auth} = useContext(Authcontext)
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    setCurrentUser(user);
  }, [auth]);

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Layout currentUser={currentUser} />}>
          <Route index element={<Homepage currentUser={currentUser} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/forgot" element={<ForgotPassword/>}/>
          <Route exact path="/reset/:token" element={<ResetPassword/>}/>
        </Route>

        
        {currentUser && (
          <Route path="/dashboard" exact element={<Dashboard />}></Route>
        )}

        <Route exact path="*" element={<NotFound />} />
  
      </Routes>
    </div>
  );
}

export default App;
