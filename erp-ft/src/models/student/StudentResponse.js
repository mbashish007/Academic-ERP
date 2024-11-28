class StudentResponse {
    constructor(data) {
      this.student_id = data.student_id
      this.roll_number = data.roll_number;
      this.first_name = data.first_name;
      this.last_name = data.last_name;
      this.photograph_path = data.photograph_path;
      this.cgpa = data.cgpa
      this.total_credits = data.total_credits;
      this.graduation_year = data.graduation_year;
      this.domain = data.domain;
      this.specialisation = data.specialisation;
      this.placement_id = data.placement_id;
    }

    
  }
  
  export default StudentResponse;
  