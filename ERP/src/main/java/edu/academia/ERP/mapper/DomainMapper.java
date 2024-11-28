package edu.academia.ERP.mapper;

import edu.academia.ERP.dto.DomainRequest;
import edu.academia.ERP.dto.DomainResponse;
import edu.academia.ERP.entity.Domain;
import org.springframework.stereotype.Service;

@Service
public class DomainMapper {
    public Domain toEntity(DomainRequest request) {
        return Domain.builder()
                .program(request.program())
                .batch(request.batch())
                .capacity(request.capacity())
                .qualification(request.qualification())
                .build();
    }

    public DomainResponse toResponseDTO(Domain domain) {
        return new DomainResponse(
        domain.getDomain_id(), domain.getProgram(), domain.getBatch(), domain.getCapacity(), domain.getQualification()
                );
    }
}
