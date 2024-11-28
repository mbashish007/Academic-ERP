package edu.academia.ERP.controller;

import edu.academia.ERP.dto.LoginRequest;
import edu.academia.ERP.service.AuthService;
import edu.academia.ERP.utility.JWTUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

//@RequestMapping("/login")
@RequiredArgsConstructor
@RestController
@CrossOrigin
public class AuthController {
    private final AuthService authService;
    private final JWTUtil jwtUtil;
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody @Valid LoginRequest request) {
        return ResponseEntity.ok(authService.authenticate(request));
    }

    @PostMapping("/register-new")
    public ResponseEntity<String> registerUser(@RequestBody @Valid LoginRequest request) {
        authService.registerNewUser(request);
        return ResponseEntity.ok(jwtUtil.generateToken(request.username()));
    }
}
