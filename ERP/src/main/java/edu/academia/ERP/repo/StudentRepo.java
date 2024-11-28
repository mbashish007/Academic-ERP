package edu.academia.ERP.repo;

import edu.academia.ERP.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface StudentRepo extends JpaRepository<Student, Long> {
    List<Student> findAllByDomain(Long domain);
}
