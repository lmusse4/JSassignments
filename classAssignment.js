class Job {
    constructor(name, industry, requiresDegree, field, yearsExperience) {
      this.name = name;
      this.industry = industry;
      this.requiresDegree = requiresDegree;
      this.field = field;
      this.yearsExperience = yearsExperience;
    }


getName() {
  return this.name;
}

getFieldAndIndustry() {
  return `This job's field is in ${this.field} & industry is ${this.industry}`;
}

getYearsExperience () {
  return this.yearsExperience;
}
}

class SoftwareJob extends Job {
    constructor(name, industry, requiresDegree, field, yearsExperience, programmingLanguages) {
      super(name, industry, requiresDegree, field, yearsExperience);
      this.programmingLanguages = programmingLanguages;
    }
  
    getProgrammingLanguages() {
      return this.programmingLanguages;
    }
  
    getYearsExperience() {
      return `${this.yearsExperience} years of experience in ${this.programmingLanguages} programming`;
    }
  }

  const job1 = new Job('Nurse', 'Healthcare Field', true, 'Nursing', 2);
console.log(job1.getName()); 
console.log(job1.getFieldAndIndustry()); 

const job2 = new Job('Marketing Manager', 'Marketing', true, 'Business', 5);
console.log(job2.getName()); 
console.log(job2.getFieldAndIndustry()); 

const job3 = new Job('Data Scientist', 'Technology', true, 'Data Science', 3);
console.log(job3.getName()); 
console.log(job3.getFieldAndIndustry()); 

// create an instance of the extended class
const softwareJob = new SoftwareJob('Full-stack Developer', 'Technology', true, 'Full-stack Development', 4, 'JavaScript');
console.log(softwareJob.getName()); 
console.log(softwareJob.getYearsExperience());
