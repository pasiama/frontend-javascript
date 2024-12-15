// Define the Student interface
interface Student {
      firstName: string;
      lastName: string;
      age: number;
      location: string;
    }
    
    // Create two student objects
    const student1: Student = {
      firstName: "John",
      lastName: "Doe",
      age: 21,
      location: "New York",
    };
    
    const student2: Student = {
      firstName: "Jane",
      lastName: "Smith",
      age: 22,
      location: "Los Angeles",
    };
    
    // Create an array containing the students
    const studentsList: Student[] = [student1, student2];
    
    // Render the table
    const body = document.querySelector("body") as HTMLBodyElement;
    
    // Create a table element
    const table = document.createElement("table");
    
    // Create the table header
    const headerRow = document.createElement("tr");
    const headers = ["First Name", "Location"];
    headers.forEach((headerText) => {
      const header = document.createElement("th");
      header.textContent = headerText;
      headerRow.appendChild(header);
    });
    table.appendChild(headerRow);
    
    // Append rows for each student
    studentsList.forEach((student) => {
      const row = document.createElement("tr");
    
      // Add first name cell
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = student.firstName;
      row.appendChild(firstNameCell);
    
      // Add location cell
      const locationCell = document.createElement("td");
      locationCell.textContent = student.location;
      row.appendChild(locationCell);
    
      table.appendChild(row);
    });
    
    // Append the table to the body
    body.appendChild(table);
    