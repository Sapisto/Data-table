import "./App.css";
import Navbar from "@/components/navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import DataTablePage from "./pages/tablePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataTablePage />} /> 
      </Routes>
  </Router>
  );
}

export default App;
