package com.cognizant.orm_learn.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
//import org.hibernate.cfg.Environment;
import org.hibernate.cfg.AvailableSettings;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.boot.MetadataSources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.cognizant.orm_learn.model.Employee;

@Configuration
public class HibernateConfig {

    @Autowired
    private DataSource dataSource;

//    @Bean
//    public SessionFactory sessionFactory() {
//        Properties settings = new Properties();
//        settings.put(AvailableSettings.DIALECT, "org.hibernate.dialect.MySQLDialect");
//        settings.put(AvailableSettings.SHOW_SQL, "true");
//
//        ServiceRegistry serviceRegistry = new StandardServiceRegistryBuilder()
//                .applySettings(settings)
//                .applySetting(AvailableSettings.DATASOURCE, dataSource)
//                .build();
//
//        return new MetadataSources(serviceRegistry)
//                .addAnnotatedClass(Employee.class)
//                .buildMetadata()
//                .buildSessionFactory();
//    }
}
