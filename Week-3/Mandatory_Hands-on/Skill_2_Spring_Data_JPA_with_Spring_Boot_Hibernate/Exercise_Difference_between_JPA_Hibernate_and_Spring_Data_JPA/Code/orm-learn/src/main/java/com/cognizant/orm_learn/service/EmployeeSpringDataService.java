package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Employee;
import com.cognizant.orm_learn.repository.EmployeeRepository;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeSpringDataService {
    @Autowired
    private EmployeeRepository repo;

    @PersistenceContext
    private EntityManager entityManager;



    public void add(Employee e) {
        repo.save(e);
    }

    public List<Employee> getAll() {
        return repo.findAll();
    }
}
