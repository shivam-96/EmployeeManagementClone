import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import FooterComp from './components/FooterComp';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeecomp from './components/ListEmployeecomp';
import AddEmployeeComp from './components/AddEmployeeComp';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<ListEmployeecomp />} />
            <Route path="/employees" element={<ListEmployeecomp />} />
            <Route path="/add-employee" element={<AddEmployeeComp/>} />
            <Route path="/employees-edit/:id" element={<AddEmployeeComp/>} />

          </Routes>
        </div>
        <FooterComp />
      </Router>
    </div>
  );
}

export default App;
