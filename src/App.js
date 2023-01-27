import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import PatientDashboard from "./components/PatientDashboard";
import LoginForm from "./pages/LoginForm";
import RegistrationForm from "./pages/RegistrationForm";
import CRUDUser from "./pages/CRUDUser";
import Crud from "./components/Crud";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
