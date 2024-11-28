package edu.academia.ERP.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;

public record StudentRequest(
        @NotNull(message = "Roll No should be present")
        @NotEmpty(message = "Roll No should be present")
        @NotBlank(message = "Roll No should be present")
        String roll_number,

        @NotNull(message = "First Name should be present")
        @NotEmpty(message = "First Name should be present")
        @NotBlank(message = "First Name should be present")
        String first_name,
        @NotNull(message = "Last Name should be present")
        @NotEmpty(message = "Last Name should be present")
        @NotBlank(message = "Last Name should be present")
        String last_name,

        @NotNull(message = "Photograph Path should be present")
        @NotEmpty(message = "Photograph Path should be present")
        @NotBlank(message = "Photograph Path should be present")
        String photograph_path,

        @NotNull(message = "CGPA should be present")
        @NotEmpty(message = "CGPA should be present")
        @NotBlank(message = "CGPA should be present")
        Double cgpa,

        @NotNull(message = "Total Credits should be present")
        @NotEmpty(message = "Total Credits should be present")
        @NotBlank(message = "Total Credits should be present")
        Integer total_credits,

        @NotNull(message = "Graduation Year should be present")
        @NotEmpty(message = "Graduation Year should be present")
        @NotBlank(message = "Graduation Year should be present")
        String graduation_year,

        @NotNull(message = "Domain should be present")
        @NotEmpty(message = "Domain should be present")
        @NotBlank(message = "Domain should be present")
        Long domain,

        Long specialisation,
        Long placement_id
) {
}
