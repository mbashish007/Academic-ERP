package edu.academia.ERP.repo;

import edu.academia.ERP.entity.Domain;
import edu.academia.ERP.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DomainRepo extends JpaRepository<Domain, Long> {
}
