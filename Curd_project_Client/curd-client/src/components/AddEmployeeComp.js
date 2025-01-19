import React, { useState } from 'react';
import { addEmployee } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployeeComp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const navigate = useNavigate();  // Get the navigate function

    const saveEmployee = async (e) => {
        e.preventDefault(); // Prevent form submission reload
        const employee = { firstName, lastName, emailId };
        try {
            const savedEmployee = await addEmployee(employee); // Call addEmployee to save data
            console.log(savedEmployee);
            navigate("/employees"); // Redirect to employees list after successful save
        } catch (error) {
            console.error("Error saving employee:", error);
        }
    };

    const cancel = () => {
        navigate("/employees");  // Navigate to /employees when cancel is clicked
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>Add employee</h2>
                        <div className='card-body'>
                            <form onSubmit={saveEmployee}>
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
                                    className='btn btn-danger ml-2'  // Red color for the cancel button
                                    type='button'
                                    onClick={cancel}  // Redirect to /employees when clicked
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

export default AddEmployeeComp;
