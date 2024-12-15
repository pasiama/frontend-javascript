// Define MajorCredits interface
interface MajorCredits {
      credits: number;
      brand: string;
    }
    
    // Define MinorCredits interface
    interface MinorCredits {
      credits: number;
      brand: string;
    }
    
    // Function to sum MajorCredits
    function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
      const totalCredits = subject1.credits + subject2.credits;
      return {
        credits: totalCredits,
        brand: subject1.brand,  // Assuming both subjects have the same brand for MajorCredits
      };
    }
    
    // Function to sum MinorCredits
    function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
      const totalCredits = subject1.credits + subject2.credits;
      return {
        credits: totalCredits,
        brand: subject1.brand,  // Assuming both subjects have the same brand for MinorCredits
      };
    }
    
    // Example usage:
    const majorSubject1: MajorCredits = { credits: 5, brand: 'MajorBrand' };
    const majorSubject2: MajorCredits = { credits: 3, brand: 'MajorBrand' };
    
    const minorSubject1: MinorCredits = { credits: 2, brand: 'MinorBrand' };
    const minorSubject2: MinorCredits = { credits: 4, brand: 'MinorBrand' };
    
    // Sum credits for Major and Minor subjects
    const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
    const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
    
    // Output results
    console.log(`Total Major Credits: ${totalMajorCredits.credits}, Brand: ${totalMajorCredits.brand}`);
    console.log(`Total Minor Credits: ${totalMinorCredits.credits}, Brand: ${totalMinorCredits.brand}`);
    