package edu.academia.ERP.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record LoginRequest(
        @NotNull(message = "Username should be present")
        @NotEmpty(message = "Username should be present")
        @NotBlank(message = "Username should be present")
        String username,

        @NotNull(message = "Password should be present")
        @NotEmpty(message = "Password should be present")
        @NotBlank(message = "Password should be present")
        String password
) {
}
