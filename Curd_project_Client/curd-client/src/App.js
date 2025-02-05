import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FooterComp from './components/FooterComp';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeecomp from './components/ListEmployeecomp';
import AddEmployeeComp from './components/AddEmployeeComp';
import UpdateEmployeeComp from './components/UpdateEmployeeComp';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <HeaderComponent />
        <div className="container flex-grow-1">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/employees" element={<ListEmployeecomp />} />
            <Route path="/add-employee" element={<AddEmployeeComp />} />
            <Route path="/employees-edit" element={<UpdateEmployeeComp />} />
          </Routes>
        </div>
      </Router>
      <FooterComp />
    </div>
  );
}

export default App;
