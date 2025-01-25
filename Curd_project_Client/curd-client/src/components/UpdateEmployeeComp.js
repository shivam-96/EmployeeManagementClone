import React, { useState, useEffect } from 'react';
import { UpdateEmployee } from "../services/EmployeeService";
import { useNavigate, useLocation } from "react-router-dom";

const UpdateEmployeeComp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const { employeeUpdate } = location.state || {}; 

    useEffect(() => {
        if (!employeeUpdate) {
            console.warn("No employee data provided. Redirecting...");
            navigate("/employees");
        } else {
            console.log("Editing Employee with ID:", employeeUpdate.id);
            setFirstName(employeeUpdate.firstName || "");
            setLastName(employeeUpdate.lastName || "");
            setEmailId(employeeUpdate.emailId || "");
        }
    }, [employeeUpdate, navigate]);

    const Update = async (e) => {
        e.preventDefault();
        const id = employeeUpdate.id

        const employee = {id, firstName, lastName, emailId };

        try {            
            const savedEmployee = await UpdateEmployee(employee);
            navigate("/employees");
        } catch (error) {
            console.error("Error updating employee:", error);
        }
    };

    const cancel = () => {
        navigate("/employees");
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>Update Employee</h2>
                        <div className='card-body'>
                            <form onSubmit={Update}>
                                <div className='form-group'>
                                    <label className="fork-lable">First Name: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter first name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label className="fork-lable">Last Name: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter last name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                                <div className='form-group'>
                                    <label className="fork-lable">Email Id: </label>
                                    <input
                                        type='text'
                                        placeholder='Enter email Id'
                                        name='emailId'
                                        className='form-control'
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    />
                                </div>
                                <button className='btn btn-success' type='submit'>
                                    Save
                                </button>
                                <button
                                    className='btn btn-danger ml-2'
                                    type='button'
                                    onClick={cancel}
                                >
                                    Cancel
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateEmployeeComp;
