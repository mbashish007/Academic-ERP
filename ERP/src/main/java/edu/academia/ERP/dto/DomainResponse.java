package edu.academia.ERP.dto;

public record DomainResponse(
        Long domain_id,
        String program,
        String batch,
        Integer capacity,
        String qualification
) {
}
