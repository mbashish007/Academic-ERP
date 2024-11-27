package edu.academia.ERP.repo;

import edu.academia.ERP.entity.Student;
import edu.academia.ERP.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepo extends JpaRepository<User, String> {

}
