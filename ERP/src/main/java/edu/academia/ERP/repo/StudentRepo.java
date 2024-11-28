package edu.academia.ERP.repo;

import edu.academia.ERP.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student, Long> {

//    List<Student> findAllByDomain(Long domain);
    @Query("SELECT s FROM Student s WHERE s.domain.domain_id = :domainId")
    List<Student> findAllByDomainId(@Param("domainId") Long domainId);
}
