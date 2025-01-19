package CURD_practice.Curd_project.Repo;

import CURD_practice.Curd_project.Model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee , Long> {

}
