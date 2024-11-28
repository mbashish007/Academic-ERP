create table students (
    student_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    roll_number varchar(10) unique not null,
    first_name varchar(255),
    last_name varchar(255),
    photograph_path text,
    cgpa double,
    total_credits int,
    graduation_year char(4),
    
    domain BIGINT,
    specialisation BIGINT,
    placement_id BIGINT
);

create table domains (
	domain_id BIGINT auto_increment primary key,
	program varchar(255),
	batch char(4),
	capacity int,
	qualification text
);
