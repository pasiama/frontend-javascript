/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
      // Declaration merging to add experienceTeachingJava to the Teacher interface
      export interface Teacher {
        experienceTeachingJava?: number;
      }
    
      export class Java extends Subject {
        getRequirements(): string {
          return "Here is the list of requirements for Java";
        }
    
        getAvailableTeacher(): string {
          if (!this.teacher.experienceTeachingJava) {
            return "No available teacher";
          }
          return `Available Teacher: ${this.teacher.firstName}`;
        }
      }
    }
    