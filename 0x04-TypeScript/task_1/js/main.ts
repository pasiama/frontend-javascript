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
    