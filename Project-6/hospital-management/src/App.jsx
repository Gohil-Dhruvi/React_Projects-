import { Routes, Route } from "react-router-dom";
import HospitalManagement from "./Components/HospitalManagement";
import Doctors from "./Components/Doctors";
import Contact from "./Components/Contact";
import Layout from "./Components/Layout";
import Patients from "./Components/Patients";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HospitalManagement />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>

  );
}

export default App;
