package com.cognizant.account.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.Map;

@RestController
@RequestMapping("/accounts")
public class AccountController {

    @GetMapping("/{number}")
    public ResponseEntity<Map<String, Object>> getAccount(@PathVariable String number) {
        Map<String, Object> account = Map.of(
                "number", number,
                "type", "savings",
                "balance", new BigDecimal("141904")
        );
        return ResponseEntity.ok(account);
    }
}
