{
// problem3

class Cat {
    private name: string;
    



    constructor (name:string){
        this.name ='cat'
      
    }

}

function isCat(obj:any): obj is Cat{
        return obj instanceof Cat
}

const myCat = new Cat('whiskers')
const myDog = { breed: "Labrador" }

function checkIfCat(animal: any): string {
    if (isCat(animal)) {
      return "Yes, it's a cat.";
    } else {
      return "No, it's not a cat.";
    }
  }
console.log(checkIfCat(myCat));
console.log(checkIfCat(myDog));





}