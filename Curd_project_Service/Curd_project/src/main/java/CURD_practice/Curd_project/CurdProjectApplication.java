package CURD_practice.Curd_project;

import CURD_practice.Curd_project.Model.Employee;
import CURD_practice.Curd_project.Repo.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan(basePackages = "CURD_practice.Curd_project.Model")  // Scan for entities
@EnableJpaRepositories(basePackages = "CURD_practice.Curd_project.Repo")  // Scan for repositories
public class CurdProjectApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(CurdProjectApplication.class, args);
	}

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public void run(String... args) throws Exception {
		// Creating Employee objects
//		Employee employee1 = new Employee();
//		employee1.setFirstName("Shiva");
//		employee1.setLastName("Ta ware");
//		employee1.setEmailId("shivam@gmail.com");
//
//		Employee employee2 = new Employee();
//		employee2.setFirstName("John");
//		employee2.setLastName("Doe");
//		employee2.setEmailId("john.doe@example.com");
//
//		Employee employee3 = new Employee();
//		employee3.setFirstName("Jane");
//		employee3.setLastName("Smith");
//		employee3.setEmailId("jane.smith@example.com");
//
//		Employee employee4 = new Employee();
//		employee4.setFirstName("Alice");
//		employee4.setLastName("Johnson");
//		employee4.setEmailId("alice.johnson@example.com");
//
//		// Saving employees to the database
//		employeeRepository.save(employee1);
//		employeeRepository.save(employee2);
//		employeeRepository.save(employee3);
//		employeeRepository.save(employee4);
//
//		// Optional: Print confirmation message
//		System.out.println("Employee records added successfully!");
	}
}
