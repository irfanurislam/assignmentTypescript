{
// prob4

const mixedNumbers =(mixData:(string | number)[]):number =>{
        let total = 0;
        for(const item of mixData){
            if(typeof item === 'number'){
                total += item as number
            }
        }
        return total
}


const mixData:(string | number)[] = [1, 'two', 3, 'four', 5]

const resultNumbers = mixedNumbers(mixData)
console.log(resultNumbers)




// problem5

interface Car{
    make:string;
    model: string;
    year:number
}
interface Driver{
    name:string;
    licensNumber:string
}

const combinedCarDriver = (car: Car, driver: Driver): { car: Car; driver: Driver }  =>{
    return {car,driver};
}

const carInfo:Car ={
    make:'yamaha',
    model: '2022',
    year:2024
}
const driverInfo:Driver ={
    name: 'anis',
    licensNumber: 'anis-02-34ll'
}

const combinedInfo = combinedCarDriver(carInfo,driverInfo)




// problem6
const calculateSum = (parameter: unknown): string => {
    if (!Array.isArray(parameter)) {
      return 'Error: Parameter is not an array.';
    }
  
    let sum = 0;
    let isError = false;
  
    for (const item of parameter) {
      if (typeof item !== 'number') {
        isError = true;
        break;
      }
  
      sum += item;
    }
  
    if (isError) {
      return 'Error: Parameter contains a non-number value.';
    }
  
    return `Sum of numbers in the array: ${sum}`;
  };

const numbersArray:  number[] =[1,2,4,6,7,5];
const anotherArray : unknown = ['one','two','three']

const totalsum = calculateSum(numbersArray)
const totalsum2 = calculateSum(anotherArray)




}