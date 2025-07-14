package com.cognizant.spring_learn.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;
import io.jsonwebtoken.security.Keys;
import java.security.Key;


@RestController
public class AuthenticationController {

//    private final String SECRET_KEY = "Aarif@54321";
    private final Key SECRET_KEY = Keys.hmacShaKeyFor("Aarif@54321Aarif@54321Aarif@54321".getBytes());

    @RequestMapping(value = "/authenticate", method = RequestMethod.GET)
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        System.out.println("authHeader: " + authHeader);

        if (authHeader != null && authHeader.startsWith("Basic ")) {
            // Decode base64 encoded username:password
            String base64Credentials = authHeader.substring("Basic ".length());
            byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
            String credentials = new String(credDecoded);
            String[] values = credentials.split(":", 2);
            String username = values[0];
            String password = values[1];

            if ("user".equals(username) && "pwd".equals(password)) {
                String token = generateToken(username);
                return ResponseEntity.ok().body("{\"token\":\"" + token + "\"}");
            }
        }

        return ResponseEntity.status(401).body("{\"error\":\"Unauthorized\"}");
    }

    private String generateToken(String username) {
        long currentTimeMillis = System.currentTimeMillis();
        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(new Date(currentTimeMillis))
                .setExpiration(new Date(currentTimeMillis + 1000 * 60 * 10)) // 10 mins
                .signWith(SignatureAlgorithm.HS256, SECRET_KEY)
                .compact();
    }
}
