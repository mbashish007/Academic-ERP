package edu.academia.ERP.service;

import edu.academia.ERP.dto.LoginRequest;
import edu.academia.ERP.entity.User;
import edu.academia.ERP.exception.LoginFailedException;
import edu.academia.ERP.repo.DomainRepo;
import edu.academia.ERP.repo.UserRepo;
import edu.academia.ERP.utility.EncryptionUtility;
import edu.academia.ERP.utility.JWTUtil;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final EncryptionUtility encryptionUtility;
    private final UserRepo repo;
    private final JWTUtil jwtUtil;

    public String authenticate(@Valid LoginRequest request) {
        Optional<User> user = repo.findById(request.username());

        if(!encryptionUtility.validates(request.password(), user.get().getPassword())) {
            throw new LoginFailedException("Wrong Password or Username");
        }
        return jwtUtil.generateToken(request.username());
    }

    public void registerNewUser(@Valid LoginRequest request) {

        User user = new User(request.username(),encryptionUtility.encode(request.password()));
        repo.save(user);
    }
}
