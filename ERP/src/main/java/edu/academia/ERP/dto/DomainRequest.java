package edu.academia.ERP.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.NumberFormat;

public record DomainRequest(
        @NotNull(message = "Program should be present")
        @NotEmpty(message = "Program should be present")
        @NotBlank(message = "Program should be present")
        String program,

        @NotNull(message = "Batch should be present")
        @NotEmpty(message = "Batch should be present")
        @NotBlank(message = "Batch should be present")
        @Size(min = 4, max = 4, message = "Code must be exactly 4 characters.")
        String batch,

        @NotNull(message = "Capacity should be present")
        Integer capacity,

        @NotNull(message = "Qualification should be present")
        @NotEmpty(message = "Qualification should be present")
        @NotBlank(message = "Qualification should be present")
        String qualification
) {
}
