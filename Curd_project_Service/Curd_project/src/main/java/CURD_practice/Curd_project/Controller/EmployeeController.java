package CURD_practice.Curd_project.Controller;

import CURD_practice.Curd_project.Exception.ResourceNotFoundException;
import CURD_practice.Curd_project.Model.Employee;
import CURD_practice.Curd_project.Repo.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployee(){
        return employeeRepository.findAll();
    }
    @PostMapping()
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeRepository.save(employee);
    }
    @GetMapping("{id}")
    public ResponseEntity <Employee> getEmployeeVyId(@PathVariable long id){
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Employee dont exist of id " + id));
        return ResponseEntity.ok(employee);
    }
    @PutMapping("{id}")
    public ResponseEntity<Employee> updateEmployee (@PathVariable long id,@RequestBody Employee employee){
        Employee updatedEmp = employeeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Employee not exist with id "+id));
        updatedEmp.setEmailId(employee.getEmailId());
        updatedEmp.setLastName(employee.getLastName());
        updatedEmp.setFirstName(employee.getFirstName());
        employeeRepository.save(updatedEmp);
return ResponseEntity.ok(updatedEmp);
    }

}
