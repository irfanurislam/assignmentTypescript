{

// problem2


interface Address{
city:string;
street: string;
}
interface Person{
    address ?: Address;
    phone:string
}

const getAddressCity =(info: Person): string | undefined =>{
         return info.address?.city
}

const person :Person ={
    address:{
        city:'raojan',
        street:'4340'
    },
    phone:'12455'
}

const person2: Person={
    phone:'8379300'
}
const result = getAddressCity(person)
const result2 = getAddressCity(person2)

console.log(result)
console.log(result2)













    
}