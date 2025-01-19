import React, { useState, useEffect } from "react";
import {getAllEmployees} from "../services/EmployeeService";
import { Link } from "react-router-dom";
const ListEmployeecomp = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      const employeeData = await getAllEmployees();
      setEmployees(employeeData);
      console.log(employees)
    };
    fetchEmployees();
  }, []);

  return (
    <div className="container">
      <h2 className="text-center">List Employees</h2>
      <table className="table table-bordered table-striped">
        <Link to="/add-employee" className="btn btn-primary mb-2" > Add employee</Link>
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Employee First Name</th>
            <th>Employee Last Name</th>
            <th>Employee Email Id</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.emailId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeecomp;
