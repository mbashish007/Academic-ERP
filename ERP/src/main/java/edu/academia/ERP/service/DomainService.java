package edu.academia.ERP.service;

import edu.academia.ERP.dto.DomainRequest;
import edu.academia.ERP.dto.DomainResponse;
import edu.academia.ERP.dto.StudentResponse;
import edu.academia.ERP.entity.Domain;
import edu.academia.ERP.exception.DomainNotFoundException;
import edu.academia.ERP.mapper.DomainMapper;
import edu.academia.ERP.mapper.StudentMapper;
import edu.academia.ERP.repo.DomainRepo;
import edu.academia.ERP.repo.StudentRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class DomainService {
    private final DomainRepo repo;
    private final DomainMapper mapper;
    private final StudentRepo studentRepo;
    private final StudentMapper studentMapper;


    public void saveDomain(DomainRequest request) {
        Domain domain = mapper.toEntity(request);
        repo.save(domain);
        return;
    }

    public List<DomainResponse> getAllDomains() {
        return repo.findAll().stream().map(mapper::toResponseDTO).collect(Collectors.toList());
    }

    public DomainResponse getDomain(Long id) throws DomainNotFoundException {
        Domain domain = getDomainById(id);
        return mapper.toResponseDTO(domain);
    }

    public Domain getDomainById(Long id) throws DomainNotFoundException {
        return repo.findById(id).orElseThrow(() -> new DomainNotFoundException("Domain not found"));
    }

    public void updateDomain(Long id, DomainRequest request) {
        Domain domain = getDomainById(id);
        Domain updatedDomain = Domain.builder().domain_id(domain.getDomain_id())
                .program(request.program())
                .qualification(request.qualification())
                .batch(request.batch())
                .capacity(request.capacity())
                .build();
        repo.save(updatedDomain);
    }

    public void deleteDomain(Long id) {
        if (repo.existsById(id)) {
            repo.deleteById(id);
        }
        else
            throw new DomainNotFoundException("Domain Does not exist");
    }

    public List<StudentResponse> getAllStudentsByDomain(Long id) throws DomainNotFoundException {
        if (repo.existsById(id)) {
            return studentRepo.findAllByDomainId(id).stream().map(studentMapper::toResponseDTO).toList();
        }
        else
            throw new DomainNotFoundException("Domain Does not exist");
    }
}
