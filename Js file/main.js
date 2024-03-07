// ===============================    function

// function add(a ,b){
//     return a + b
// }
// console.log(add( 2 , 5))

// function add(a ,b){
//     return a - b
// }
// console.log(minus( 2 , 8))

// function add(a ,b){
//     return a * b
// }
// console.log(add( 2 , 2))


// ===============================     For loop

// print table

// const number = 2
// for(let i=1 ; i<= 10 ; i++){
//   console.log(number * i)
// }


// ===============================     ForEach loop
// const array = [ 1,2,3,4,5,6,7,8]

// array.forEach(function(num){
// console.log(num)
// })





// ===============================     Map 

// const Numbers = [ 1,2,3,4,5,6,7,8,9]

// const Printnum = Numbers.map((num) => num  )
// console.log(Printnum)


// ===============================     filter 

// const Numbers = [ 1,2,3,4,5,6,7,8,9]
//remove number 3
// const Filter = Numbers.filter((num) => num !== 3)
// console.log(Filter)


// Filter out numbers divisible by 2
// const FilteredNumbers = Numbers.filter((num) => num % 2 === 0);
// console.log(FilteredNumbers);

// ===============================     Reduce  

// const Numbers = [ 1,2,3,4,5,6,7,8,9]
// const Reduce = Numbers.reduce((accumiletor , currentvalue) =>{
//     return accumiletor + currentvalue
// } )
// console.log(Reduce)

// ===============================     Sort 

// const Numbers = [ 2,1,5,4,6,3,7,9,8,6]
// const Sort = Numbers.sort()
// console.log(Sort)

//  const sort = Numbers.sort((a , b) => b - a)
//  console.log(sort)








// ===============================  	Array (Methods) [ push , pop , shift , unshift , slice, splice , concat ]

// ===============================     Push 
// Add a value to the end of the array.

// const number = [ 1,2,3 ]
// const pushvalue = number.push(4 , 5)
// console.log(number)

// ===============================     unShift 
// Add a value to the start of the array.

// const number = [ 3,4,5 ]
// const unShiftvalue = number.unshift(1 , 2)
// console.log(number)

// ===============================     pop
// Remove a value to the End of the array.
// const number = [ 1,2,3,4,5 ]
// const popvalue = number.pop()
// console.log(number)

// ===============================     shift
// Remove a value to the start of the array.

// const number = [1,2,3,4,5]
// const shiftvalue = number.shift()
// console.log(number)

// ===============================     slice 
// const number = [ 1,2,3,4,5,6,7,8,9 ]
// const value = number.slice( 2 , 5) 
// console.log(value)

// 1st parameter   starting index
// 2nd parameter   end index


// ===============================     splice 
// const number = [ 1,2,3,4,5 ]
// const va = number.splice( 0  , 2 , 0)        
// console.log(number)

// 1st parameter    pass index   number  jo remove krna hai.
// 2nd parameter    pass value   kitne bar remove krna hai 
// 3rd parameter    pass value   jo add krna  hai 


// ===============================     Concat

// merge two or more arrays.
// const number = [ 1,2,3,4,5 ]
// const number2 = [ 6,7,8,9,10 ]

// const value = number.concat(number2)
// console.log(value)



// ===============================  If , else condition

// const x = 10;

// if (x === 10) {
//     console.log('true')
// } else {
//     console.log('fales')
// }


// if (x === 9) {
//     console.log('true')
// } else {
//     console.log('false')
// }





// =============================== Callback

// function greet(name, callback) {
//     console.log('Hello, ' + name );
//     callback(); 
//   }

//   function sayGoodbye() {
//     console.log('Goodbye!');
//   }


//   greet('team', sayGoodbye);





// ===============================  async / await 
// async function getdta(){
//     const resonse = await fetch('https://fakestoreapi.com/products')
//     const responseData = await resonse.json()

//     console.log(responseData)
// }

// getdta()







