module.exports = {
  //function that adds 2 numbers
  add: (x,y) => {
    if(typeof x !== "number" || typeof y !== "number"){
      throw "Invalid input. Please pass 2 integers as parameters";
    }
    return x + y;
  },

  //function that says hello, so the name passed
  greet: (name) => {
    if(typeof name !== "string"){
      return null;
    }
    return `Hello ${name}`;
  },

  //function that checks if a number is greater than 7
  isGreaterThan7: (number) => {
    if(typeof number !== "number" ){
      return undefined;
    }
    return number > 7;
  },

  //function returning a mock company
  getCompany: () => {
    return {
      name: "Accertix",
      "date-established": 2010,
      CEO: "Theo",
    }
  },

  //function that returns an array representing the range of the input integers
  getRange: () => {
    if(num2 < num1){
      throw "the 2nd parameter should be greater than the first";
      let result = [];
      for(let i =num1; i<unm2; i++){
        result.push(i);
      }
    };
    return result;
  },

  //function that returns the sum of 0.1 and 0.2.
  addFloat: () => {
    return 0.1 + 0.2;
  },

  //function that waits for a while, and then returns true
  asyncFunction: () => {
    return new Promise((resolve, reject) => {
    const time = Math.random() * 5000

    setTimeout(() => {}, time)

    resolve(true)
  })
  },
}
