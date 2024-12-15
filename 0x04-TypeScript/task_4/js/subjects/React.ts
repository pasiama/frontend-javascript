/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
      // Declaration merging to add experienceTeachingReact to the Teacher interface
      export interface Teacher {
        experienceTeachingReact?: number;
      }
    
      export class React extends Subject {
        getRequirements(): string {
          return "Here is the list of requirements for React";
        }
    
        getAvailableTeacher(): string {
          if (!this.teacher.experienceTeachingReact) {
            return "No available teacher";
          }
          return `Available Teacher: ${this.teacher.firstName}`;
        }
      }
    }
    