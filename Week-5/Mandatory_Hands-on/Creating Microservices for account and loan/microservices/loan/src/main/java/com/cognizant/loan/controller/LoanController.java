package com.cognizant.loan.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;

@RestController
@RequestMapping("/loans")
public class LoanController {

    @GetMapping("/{number}")
    public ResponseEntity<Map<String, Object>> getLoan(@PathVariable String number) {
        // Dummy data
        Map<String, Object> loan = Map.of(
                "number", number,
                "type", "car",
                "loan", new BigDecimal("400000"),
                "emi", new BigDecimal("3258"),
                "tenure", 18
        );
        return ResponseEntity.ok(loan);
    }
}
