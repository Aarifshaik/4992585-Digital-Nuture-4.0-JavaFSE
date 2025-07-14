package com.cognizant.spring_learn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class SpringLearnApplication {
	private static final Logger logger = LoggerFactory.getLogger(SpringLearnApplication.class);
	public static void main(String[] args) {
		logger.info("Spring Boot Application Started");
		logger.info("In Main Function");
		SpringApplication.run(SpringLearnApplication.class, args);
		logger.info("Spring Boot Application Ended");
	}

}
