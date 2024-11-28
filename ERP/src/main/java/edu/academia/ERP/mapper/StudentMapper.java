package edu.academia.ERP.mapper;

import edu.academia.ERP.dto.DomainRequest;
import edu.academia.ERP.dto.DomainResponse;
import edu.academia.ERP.dto.StudentRequest;
import edu.academia.ERP.dto.StudentResponse;
import edu.academia.ERP.entity.Domain;
import edu.academia.ERP.entity.Student;
import org.springframework.stereotype.Service;

@Service
public class StudentMapper {
    public Student toEntity(StudentRequest request) {
        return Student.builder()
                .roll_number(request.roll_number())
                .first_name(request.first_name())
                .last_name(request.last_name())
                .photograph_path(request.photograph_path())
                .cgpa(request.cgpa())
                .total_credits(request.total_credits())
                .graduation_year(request.graduation_year())
                .domain(request.domain())
                .specialisation(request.specialisation())
                .placement_id(request.placement_id())
                .build();
    }

    public StudentResponse toResponseDTO(Student student) {
        return new StudentResponse(
                student.getStudent_id(), student.getRoll_number(), student.getFirst_name(), student.getLast_name(), student.getPhotograph_path(), student.getCgpa(), student.getTotal_credits(), student.getGraduation_year(), student.getDomain(), student.getSpecialisation(), student.getPlacement_id()
        );
    }
}
