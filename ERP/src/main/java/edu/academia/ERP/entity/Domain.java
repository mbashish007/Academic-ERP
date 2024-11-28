package edu.academia.ERP.entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "domains")
public class Domain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long domain_id;

    private String program;
    @Column(columnDefinition = "CHAR(4)")
    private String batch;
    private int capacity;
    @Column(columnDefinition = "text")
    private String qualification;
}
