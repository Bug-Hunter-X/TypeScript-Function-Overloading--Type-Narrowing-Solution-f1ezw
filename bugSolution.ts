function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); //result1: number = 8
let result2 = subtract(10, 5); // result2: number = 5

console.log(result1,result2); // Output: 8 5

// Function overloading is not directly supported in TypeScript.
// Type Narrowing is a way to handle this, with the use of conditional types and type predicates.

function addOrSubtract(a: number, b: number): number; 
function addOrSubtract(a: string, b: string): string;
function addOrSubtract(a: any, b: any): any {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b; // Return type is inferred as number
    }else if(typeof a === 'string' && typeof b === 'string'){
        return a + b; // Return type is inferred as string
    }
    return a + b;// Return type is inferred as any
}

let result3 = addOrSubtract(5,3); // result3: number = 8
let result4 = addOrSubtract('hello','world');// result4: string = helloworld
let result5 = addOrSubtract(true, false); // result5: boolean = true

console.log(result3, result4,result5); //Output: 8 helloworld true