class DomainResponse {
    constructor(data) {
      this.domain_id = data.domain_id
      this.program = data.program;
      this.batch = data.batch;
      this.capacity = data.capacity;
      this.qualification = data.qualification
    }

    
  }
  
  export default DomainResponse;
  