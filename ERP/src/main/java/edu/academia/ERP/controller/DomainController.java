package edu.academia.ERP.controller;

import edu.academia.ERP.dto.DomainRequest;
import edu.academia.ERP.dto.DomainResponse;
import edu.academia.ERP.dto.StudentResponse;
import edu.academia.ERP.exception.DomainNotFoundException;
import edu.academia.ERP.exception.InvalidAuthTokenException;
import edu.academia.ERP.service.DomainService;
import edu.academia.ERP.utility.JWTUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@RequestMapping("/login")

@RequiredArgsConstructor
@RestController
@RequestMapping("api/v1/domain")
@CrossOrigin
public class DomainController {
    private final DomainService domainService;
    private final JWTUtil jwtUtil;

    @GetMapping
    public ResponseEntity<List<DomainResponse>> getAllDomain(@RequestHeader("Authorization") String authHeader) {
        authHeader = authHeader.replace("Bearer ", "");
        if(jwtUtil.validateToken(authHeader, "")) {
            String email = jwtUtil.extractUsername(authHeader);
            return ResponseEntity.ok(domainService.getAllDomains());
        }
        throw new InvalidAuthTokenException("Invalid token");
    }

    @GetMapping("/{id}")
    public ResponseEntity<DomainResponse> getDomain(@PathVariable("id") Long id, @RequestHeader("Authorization") String authHeader) throws DomainNotFoundException {
        if(jwtUtil.extractTokenAndValidate(authHeader)) {
            return ResponseEntity.ok(domainService.getDomain(id));
        }
        throw new InvalidAuthTokenException("Invalid token");
    }

    @GetMapping("/{id}/students")
    public ResponseEntity<List<StudentResponse>> getStudentByDomain(@PathVariable("id") Long id, @RequestHeader("Authorization") String authHeader) {
        if(jwtUtil.extractTokenAndValidate(authHeader)) {
            return ResponseEntity.ok(domainService.getAllStudentsByDomain(id));
        }
        throw new InvalidAuthTokenException("Invalid token");
    }


    @PostMapping
    public ResponseEntity<String> createDomain(@RequestHeader("Authorization") String authHeader, @RequestBody @Valid DomainRequest request) {
        domainService.saveDomain(request);
        return ResponseEntity.ok("Domain Created Successfully.");
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateDomain(@PathVariable("id") Long id, @RequestHeader("Authorization") String authHeader,
                                                 @RequestBody @Valid DomainRequest request) {
        if(jwtUtil.extractTokenAndValidate(authHeader)) {
            domainService.updateDomain(id, request);
            return ResponseEntity.ok("Domain Updated Successfully");
        }
        throw new InvalidAuthTokenException("Invalid token");

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteDomain(@PathVariable("id") Long id, @RequestHeader("Authorization") String authHeader) {

        if(jwtUtil.extractTokenAndValidate(authHeader)) {
            domainService.deleteDomain(id);
            return ResponseEntity.ok("Domain Deleted Successfully");
        }
        throw new InvalidAuthTokenException("Invalid token");
    }


}
