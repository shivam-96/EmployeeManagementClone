import React, { useState, useEffect } from "react";
import { getAllEmployees, DeleteEmployee } from "../services/EmployeeService";
import { Link, useNavigate } from "react-router-dom";

const ListEmployeeComp = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeeData = await getAllEmployees();
        setEmployees(employeeData);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  const editEmp = (employeeUpdate) => {
    navigate(`/employees-edit`, { state: { employeeUpdate } }); // Navigate to edit page
  };

  const deleteEmp = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await DeleteEmployee(id); // Delete from backend
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== id)
        ); // Update state
      } catch (error) {
        console.error("Error deleting employee:", error);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="text-center">List Employees</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">
        Add Employee
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email Id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.firstName}</td>
              <td>{emp.lastName}</td>
              <td>{emp.emailId}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => editEmp(emp)}
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteEmp(emp.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListEmployeeComp;
