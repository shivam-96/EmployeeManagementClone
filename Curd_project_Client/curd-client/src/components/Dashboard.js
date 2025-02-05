import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../style/dashboard.css";

const Dashboard = () => {
  const recentEmployees = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];

  return (
    <div className="container">
    <div className="row justify-content-end">
      <div className="card col-md-3">
        <h2 className="text-center">Recently Added Employees</h2>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {recentEmployees.map((employee) => (
              <li key={employee.id} className="list-group-item">
                {employee.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <div className="row justify-content-end mt-3">
      <div className="card col-md-3 text-center">
        <div className="card-body">
          <h5 className="card-title">View All Employees</h5>
          <button className="btn btn-primary" >Show All</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
