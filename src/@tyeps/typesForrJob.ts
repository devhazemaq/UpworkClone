

export interface IJob {


  id: number;
  title: string;
  description: string;
  jobSkills: string[];
  complexity: string;
  jobType: string;
  deadLine: string;
  levelExperience: string;
  hiringType: string;
  budget: {
    hourly: {
      from: number;
      to: number;
    };
    fixed: number;
  };
  image: string;
  proposals: string;
  country: string;
  postTime: string;
} 

