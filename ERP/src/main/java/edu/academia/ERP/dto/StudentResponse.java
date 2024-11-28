package edu.academia.ERP.dto;

public record StudentResponse(
        Long student_id,
        String roll_number,
        String first_name,
        String last_name,
        String photograph_path,
        Double cgpa,
        int total_credits,
        String graduation_year,
        Long domain,
        Long specialisation,
        Long placement_id
) {
}
