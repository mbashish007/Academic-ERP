package edu.academia.ERP.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
//import org.springframework.data.annotation.Id;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "students")
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long student_id;
    private String roll_number;
    private String first_name;
    private String last_name;
    private String photograph_path;
    private Double cgpa;
    private int total_credits;
    private String graduation_year;

    @ManyToOne
    @JoinColumn(name = "domain")
    private Domain domain;

    private Long specialisation;
    private Long placement_id;
}
