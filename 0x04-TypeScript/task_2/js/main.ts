// DirectorInterface
interface DirectorInterface {
      workFromHome(): string;
      getCoffeeBreak(): string;
      workDirectorTasks(): string;
    }
    
    // TeacherInterface
    interface TeacherInterface {
      workFromHome(): string;
      getCoffeeBreak(): string;
      workTeacherTasks(): string;
    }
    
    // Director class implementing DirectorInterface
    class Director implements DirectorInterface {
      workFromHome(): string {
        return "Working from home";
      }
    
      getCoffeeBreak(): string {
        return "Getting a coffee break";
      }
    
      workDirectorTasks(): string {
        return "Getting to director tasks";
      }
    }
    
    // Teacher class implementing TeacherInterface
    class Teacher implements TeacherInterface {
      workFromHome(): string {
        return "Cannot work from home";
      }
    
      getCoffeeBreak(): string {
        return "Cannot have a break";
      }
    
      workTeacherTasks(): string {
        return "Getting to work";
      }
    }
    
    // Function to create an Employee (Director or Teacher)
    function createEmployee(salary: number | string): Director | Teacher {
      if (typeof salary === "number" && salary < 500) {
        return new Teacher();
      }
      return new Director();
    }
    
    // Example Usage
    const employee1 = createEmployee(200);
    console.log(employee1 instanceof Teacher); // Output: true
    console.log(employee1.workFromHome()); // Output: Cannot work from home
    
    const employee2 = createEmployee(1000);
    console.log(employee2 instanceof Director); // Output: true
    console.log(employee2.workFromHome()); // Output: Working from home
    
    const employee3 = createEmployee("$500");
    console.log(employee3 instanceof Director); // Output: true
    console.log(employee3.workFromHome()); // Output: Working from home
    