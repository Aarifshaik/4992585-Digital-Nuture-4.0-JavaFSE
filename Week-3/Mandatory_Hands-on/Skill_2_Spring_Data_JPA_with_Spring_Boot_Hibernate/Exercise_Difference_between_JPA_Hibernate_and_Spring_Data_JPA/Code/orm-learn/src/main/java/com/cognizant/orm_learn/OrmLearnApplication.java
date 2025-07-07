package com.cognizant.orm_learn;

import com.cognizant.orm_learn.model.Employee;
import com.cognizant.orm_learn.service.EmployeeHibernateService;
import com.cognizant.orm_learn.service.EmployeeSpringDataService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class OrmLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);

		Employee emp = new Employee();
		emp.setId(3);
		emp.setName("Aarif Shaik");
		emp.setDepartment("CS");

		// Spring Data JPA
		EmployeeSpringDataService jpaService = context.getBean(EmployeeSpringDataService.class);
		jpaService.add(emp);
        LOGGER.info("Spring Data JPA: {}", jpaService.getAll());

		// Hibernate
		EmployeeHibernateService hibService = context.getBean(EmployeeHibernateService.class);
		emp.setId(4);
		emp.setName("Ayesha Shaik");
		emp.setDepartment("Bio");
		hibService.add(emp);
        LOGGER.info("Hibernate: {}", hibService.getAll());
	}
}

