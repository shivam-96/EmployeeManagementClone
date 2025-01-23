import axios from "axios";

const EMPLOYEE_LIST_API = "http://localhost:8080/api/v1/employees";

const getAllEmployees = async () => {
  try {
    const response = await axios.get(EMPLOYEE_LIST_API);
    return response.data;  // Return the employee data
  } catch (error) {
    console.error("Error fetching employees:", error);
    return [];  // Return an empty array in case of an error
  }
};

const addEmployee = async (emp)=>{
    try {
        const res = await axios.post(EMPLOYEE_LIST_API,emp);
        return res.data;  
    } catch (error) {
        console.error("Error adding employee:", error);
        throw error; 
    }
}
const getEmployeeById=async(id)=>{
  try {
    const res = await axios.put(EMPLOYEE_LIST_API+"/",id);
  } catch (error) {
    console.error("no employee found", error);
        throw error; 
  }
}

export {addEmployee,getAllEmployees,getEmployeeById};
