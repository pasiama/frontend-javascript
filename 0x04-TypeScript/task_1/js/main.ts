// Define the Teacher interface
interface Teacher {
      readonly firstName: string;
      readonly lastName: string;
      fullTimeEmployee: boolean;
      yearsOfExperience?: number; // Optional property
      location: string;
      [key: string]: any; // Allows adding any additional property
    }
    
    // Example usage
    const teacher3: Teacher = {
      firstName: "John",
      fullTimeEmployee: false,
      lastName: "Doe",
      location: "London",
      contract: false, // Additional property
    };
    
    console.log(teacher3);
    

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create an example object for Directors
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

// Log the object
console.log(director1);
