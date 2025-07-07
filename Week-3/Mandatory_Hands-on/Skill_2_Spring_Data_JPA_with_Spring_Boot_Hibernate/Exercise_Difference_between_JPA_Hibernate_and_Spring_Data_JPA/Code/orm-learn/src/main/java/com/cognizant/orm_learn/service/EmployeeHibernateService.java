package com.cognizant.orm_learn.service;

import com.cognizant.orm_learn.model.Employee;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeHibernateService {

    @Autowired
    private SessionFactory sessionFactory;

    public void add(Employee e) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.persist(e);
        tx.commit();
        session.close();
    }

    public List<Employee> getAll() {
        Session session = sessionFactory.openSession();
        List<Employee> list = session.createQuery("from Employee", Employee.class).list();
        session.close();
        return list;
    }
}
