// src/components/HeaderComponent.js

import React from 'react';

const HeaderComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
          <div className="container-fluid">
            <span className="navbar-brand fs-3">
              <i className="bi bi-people-fill"></i> Employee Management
            </span>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Employees
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Add Employee
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    };
export default HeaderComponent;
