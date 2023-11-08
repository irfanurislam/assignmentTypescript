{
    // problem1

   const unionType = (data:string | number):number =>{
        if(typeof data === 'string'){
            return data.length
        }else{
            return data*data
        }
   }
   const testString :string = 'union tpe'
   const testNumber :number = 4

   console.log(unionType(testString))
   console.log(unionType(testNumber))


}